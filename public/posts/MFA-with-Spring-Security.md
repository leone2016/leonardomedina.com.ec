
> if you want to run this project, you can find it in [ GITHUB spring_mfa_demo](https://github.com/leone2016/blog-spring-security-mfa)


Security is no longer optional in modern applications, especially when dealing with sensitive user data and APIs exposed to the internet. One of the most effective ways to strengthen authentication is by using **Multi-Factor Authentication (MFA)**.

With **Spring Security 7**, implementing MFA in a REST API—particularly one that uses **JWT**—has become significantly simpler, requiring far less custom code than before.

---

## What Is Multi-Factor Authentication (MFA)?

Multi-Factor Authentication is a security mechanism that requires users to verify their identity using **at least two different factors** before gaining access to an application.

These factors usually fall into three categories:

- **Something you know** – such as a password or PIN  
- **Something you have** – such as a mobile phone, email access, or hardware token  
- **Something you are** – such as a fingerprint or facial recognition  

In a typical MFA flow, a user first logs in with a username and password. Then, as a second step, they must confirm a one-time code sent via SMS, email, or an authenticator app.

---

## Why MFA Matters for REST APIs

REST APIs are often stateless and rely on **JWT tokens** for authentication. While JWTs are efficient and scalable, they also increase the importance of strong identity verification at login time.

Without MFA, a leaked or compromised password can grant full access to an API. MFA significantly reduces this risk by ensuring that possession of valid credentials alone is not enough to authenticate.

# Practice Exercise: Multi-Factor Authentication (MFA) with Spring Security

### Objective

This exercise aims to provide hands-on experience in implementing a Multi-Factor Authentication (MFA) system using Spring Boot 4 and Spring Security. You will implement a stateless security flow that requires both a password (first factor) and a One-Time Token (OTT) (second factor) to access protected resources.

### Technologies & Tools

- Java 25 (Preview features enabled)
- Spring Boot 4.x
- Spring Security (OAuth2 Resource Server, MFA)
- Gradle (Kotlin DSL)
- An IDE (IntelliJ IDEA, VS Code, or Eclipse)

### Task Description

Your task is to create a Spring Boot application that secures endpoints using varying levels of authentication trust. You will build a system where a user logs in to get a JWT (Level 1), exchanges that JWT + an OTT for a stronger JWT (Level 2), and accesses a protected resource.

#### 1. Create a Spring Boot Project

a. Go to [Spring Initializr](https://start.spring.io/).

b. Configure your project with:

- **Project:** Gradle - Kotlin
- **Language:** Java
- **Spring Boot:** 3.x or 4.x (Snapshot)
- **Group:** ec.com.leonardomedina (or any other group you prefer)
- **Artifact:** spring-mfa-demo
- **Dependencies:**
  - Spring Security
  - Spring Web
  - OAuth2 Resource Server
  - Lombok

c. Generate and unzip the project.

#### 2. Configure Dependencies (build.gradle)

Open your **build.gradle** and ensure you have the necessary dependencies. We are using Java 25 preview features in this lab, so make sure your toolchain is set correctly.

```kotlin
plugins {
    java
    id("org.springframework.boot") version "4.0.1" // Or latest
    id("io.spring.dependency-management") version "1.1.7"
}

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(25) // Ensure you have JDK 25 installed
    }
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-security")
    implementation("org.springframework.boot:spring-boot-starter-webmvc")
    // For handling JWTs
    implementation("org.springframework.security:spring-security-oauth2-resource-server")
    implementation("org.springframework.boot:spring-boot-starter-oauth2-authorization-server")
    
    // Lombok for less boilerplate
    compileOnly("org.projectlombok:lombok")
    annotationProcessor("org.projectlombok:lombok")
    
    // Testing
    testImplementation("org.springframework.boot:spring-boot-starter-security-test")
    testImplementation("org.springframework.boot:spring-boot-starter-webmvc-test")
}
```

#### 3. Security Configuration

We need to configure Spring Security to recognize two levels of trust and handle JWT signing/verification.

##### 3.1 Generate RSA Keys

This application uses RSA keys to sign and verify the JWTs. You need to generate a Private/Public key pair and place them in the **src/main/resources/static** directory.

Run the following commands in your terminal (using OpenSSL):

```bash
# Create the directory
mkdir -p src/main/resources/static

# Generate Private Key
openssl genrsa -out src/main/resources/static/private.key 2048

# Generate Public Key from Private Key
openssl rsa -in src/main/resources/static/private.key -pubout -out src/main/resources/static/public.key

# Convert Private Key to PKCS8 format (Required by Java)
openssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in src/main/resources/static/private.key -out src/main/resources/static/private.key.pkcs8
mv src/main/resources/static/private.key.pkcs8 src/main/resources/static/private.key
```

##### 3.2 Configure Application Properties (application.yaml)

Configure the application to locate these keys. Rename **application.properties** to **application.yaml** (or create it) in **src/main/resources/**.

```yaml
spring:
  application:
    name: spring-mfa-demo

rsa:
  public-key: classpath:static/public.key
  private-key: classpath:static/private.key
```

##### 3.3 JWT Configuration (JwtConfig.java)

We need a configuration class to load these keys and configure the **JwtEncoder** (for creating tokens) and **JwtDecoder** (for validating tokens).

Create **spring_mfa_demo/config/security/JwtConfig.java**:

```java
package dev.fdherrera.spring_mfa_demo.config.security;

import com.nimbusds.jose.Algorithm;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import java.io.IOException;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.Base64;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.Resource;
import org.springframework.security.oauth2.jose.jws.SignatureAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;

@Configuration
public class JwtConfig {
  @Bean
  JwtDecoder jwtDecoder(@Value("${rsa.public-key}") Resource publicKeyResource)
      throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
    var publicKey = loadPublicKey(publicKeyResource);
    return NimbusJwtDecoder.withPublicKey(publicKey)
        .signatureAlgorithm(SignatureAlgorithm.RS256)
        .build();
  }

  @Bean
  JwtEncoder jwtEncoder(
      @Value("${rsa.public-key}") Resource publicKeyResource,
      @Value("${rsa.private-key}") Resource privateKeyResource)
      throws NoSuchAlgorithmException, InvalidKeySpecException, IOException {
    var publicKey = loadPublicKey(publicKeyResource);
    var privateKey = loadPrivateKey(privateKeyResource);

    var jwk = new RSAKey.Builder(publicKey)
            .algorithm(Algorithm.parse("RS256"))
            .privateKey(privateKey)
            .build();
    var jwkSource = new ImmutableJWKSet<>(new JWKSet(jwk));
    return new NimbusJwtEncoder(jwkSource);
  }

  private RSAPublicKey loadPublicKey(Resource resource)
      throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
    var decoded = getDecodedKeyContent(resource);
    return (RSAPublicKey)
        KeyFactory.getInstance("RSA").generatePublic(new X509EncodedKeySpec(decoded));
  }

  private RSAPrivateKey loadPrivateKey(Resource resource)
      throws IOException, NoSuchAlgorithmException, InvalidKeySpecException {
    var decoded = getDecodedKeyContent(resource);
    return (RSAPrivateKey)
        KeyFactory.getInstance("RSA").generatePrivate(new PKCS8EncodedKeySpec(decoded));
  }

  private byte[] getDecodedKeyContent(Resource resource) throws IOException {
    var keyAsString = new String(resource.getContentAsByteArray())
            .replaceAll("-----BEGIN (.*)-----", "")
            .replaceAll("-----END (.*)-----", "")
            .replaceAll("\\s", "");
    return Base64.getDecoder().decode(keyAsString);
  }
}
```

##### 3.4 JWT Authentication Config (JwtAuthConfig.java)

We also need a small helper to convert JWT Authorities correctly.

Create **spring_mfa_demo/config/security/JwtAuthConfig.java**:

```java
package dev.fdherrera.spring_mfa_demo.config.security;

import lombok.val;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;

@Configuration
public class JwtAuthConfig {
  @Bean
  JwtAuthenticationConverter jwtAuthenticationConverter(
      JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter) {
    val jwtAuthenticationConverter = new JwtAuthenticationConverter();
    jwtAuthenticationConverter.setJwtGrantedAuthoritiesConverter(jwtGrantedAuthoritiesConverter);
    return jwtAuthenticationConverter;
  }

  @Bean
  JwtGrantedAuthoritiesConverter jwtGrantedAuthoritiesConverter() {
    val jwtGrantedAuthoritiesConverter = new JwtGrantedAuthoritiesConverter();
    jwtGrantedAuthoritiesConverter.setAuthorityPrefix("");
    return jwtGrantedAuthoritiesConverter;
  }
}
```

##### 3.5 Security Chain Configuration (SecurityConfig.java)

Now we tie it all together in the main security config.

Create/Edit **spring_mfa_demo/config/security/SecurityConfig.java**:

```java
package ec.com.leonardomedina.spring_mfa_demo.config.security;

import lombok.val;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authorization.AuthorizationManagerFactories;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.authority.FactorGrantedAuthority;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;

@Configuration
@EnableWebSecurity(debug = true)
public class SecurityConfig {

  @Bean
  SecurityFilterChain securityFilterChain(HttpSecurity http, JwtAuthenticationConverter jwtAuthenticationConverter) throws Exception {
    
    // Define Factor 1: Requires just the Bearer Token (Password Login)
    val bearerFactor = AuthorizationManagerFactories.multiFactor()
            .requireFactors(FactorGrantedAuthority.BEARER_AUTHORITY)
            .build();

    // Define Factor 2: Requires Bearer Token + OTT (MFA Login)
    val mfa = AuthorizationManagerFactories.multiFactor()
            .requireFactors(FactorGrantedAuthority.BEARER_AUTHORITY, FactorGrantedAuthority.OTT_AUTHORITY)
            .build();

    http.csrf(AbstractHttpConfigurer::disable)
        .sessionManagement(sm -> sm.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authorizeHttpRequests(authorize -> authorize
            // Public endpoint to login
            .requestMatchers("/login").permitAll()
            
            // Endpoints accessible with just Factor 1 (Password)
            .requestMatchers("/ott", "/ott/login").access(bearerFactor.hasRole("USER"))
            
            // Endpoint accessible ONLY with Factor 2 (MFA)
            .requestMatchers("/user/settings*").access(mfa.hasRole("USER"))
            
            .anyRequest().authenticated()
        )
        // Configure as Resource Server to parse JWTs
        .oauth2ResourceServer(oauth -> oauth.jwt(jwt -> jwt.jwtAuthenticationConverter(jwtAuthenticationConverter)));
        
    return http.build();
  }
  
  // ... Include other beans like AuthenticationManager, UserDetailsService (InMemory), and PasswordEncoder
}
```

*(Note: Ensure you include the **AuthenticationManager** and **UserDetailsService** beans as seen in the project reference)*

#### 4. Initial Authentication (AuthController.java)

Create a controller that accepts a username and password, authenticates the user, and issues a JWT with the **FACTOR_PASSWORD** claim.

File: **spring_mfa_demo/controller/AuthController.java**

```java
@Slf4j
@RestController
@RequiredArgsConstructor
public class AuthController {
  private final AuthenticationManager authenticationManager;
  private final JwtEncoder jwtEncoder;

  @PostMapping(value = "/login")
  ResponseEntity<Void> login(@RequestParam String username, @RequestParam String password) {
    // 1. Authenticate user
    var authRequest = new UsernamePasswordAuthenticationToken(username, password);
    var auth = authenticationManager.authenticate(authRequest);

    // 2. Create JWT with claims
    String token = jwtEncoder.encode(JwtEncoderParameters.from(
            JwsHeader.with(SignatureAlgorithm.RS256).build(),
            JwtClaimsSet.builder()
                .subject(auth.getName())
                .claim("scope", auth.getAuthorities().stream().map(GrantedAuthority::getAuthority).toList()) // Includes ROLE_USER
                .build()
        )).getTokenValue();

    // 3. Return Token
    return ResponseEntity.noContent().header("Authorization", "Bearer " + token).build();
  }
}
```

#### 5. MFA Handling (OttController.java)

This controller handles two things:

1. Generating a One-Time Token (OTT) for a logged-in user.
2. Validating that OTT to issue a new, more powerful JWT.

File: **spring_mfa_demo/controller/OttController.java**

```java
@RestController
@RequestMapping("/ott")
@RequiredArgsConstructor
public class OttController {
  private final JwtEncoder jwtEncoder;
  // Simulating a database for OTTs
  private final Map<String, OneTimeToken> tokens = new HashMap<>();

  // Step 1: User requests an OTP
  @PostMapping
  void getOttCode() {
    var auth = SecurityContextHolder.getContext().getAuthentication();
    // Create a generic OTT
    var ott = new DefaultOneTimeToken(UUID.randomUUID().toString(), auth.getName(), Instant.now().plusSeconds(60));
    tokens.put(auth.getName(), ott);
    // In a real app, you would SMS/Email this code to the user.
  }

  // Step 2: User submits the OTP to "upgrade" their session
  @PostMapping("/login")
  ResponseEntity<Void> validateOtt(@RequestParam String ott) {
    var auth = SecurityContextHolder.getContext().getAuthentication();
    var storedToken = tokens.get(auth.getName());

    // Validate OTP
    if (storedToken == null || !storedToken.getTokenValue().equals(ott)) {
      throw new IllegalArgumentException("Invalid OTP");
    }

    // Add OTT_AUTHORITY to the new token
    List<String> newAuthorities = new ArrayList<>();
    newAuthorities.add("OTT_AUTHORITY"); // The specific MFA authority
    // ... add existing authorities ...

    // Generate new JWT
    String token = jwtEncoder.encode(...).getTokenValue();
    
    return ResponseEntity.noContent().header("Authorization", "Bearer " + token).build();
  }
}
```

#### 6. Protected Resource (`UserController.java`)

Create an endpoint that is only accessible if the user has completed the MFA flow.

```java
@RestController
@RequestMapping("/user")
public class UserController {

  // This endpoint requires "MFA" factor as defined in SecurityConfig
  @GetMapping("/settings")
  ResponseEntity<Map<String, String>> getSettings() {
    return ResponseEntity.ok(Map.of("secret", "You have accessed the secure vault!"));
  }
}
```

#### 7. Test and Verify

Follow these steps using **curl** to verify your implementation.

1. **Start the Application**:

   ```bash
   ./gradlew bootRun
   ```

2. **Login (Factor 1)**:
   Authenticate with the basic credentials to get your initial JWT.

   ```bash
   curl -v -X POST http://localhost:8080/login \
     -d "username=user" \
     -d "password=password"
   ```

   *Copy the **Authorization** header token (e.g., eyJhb...). Let's call this **TOKEN_1**.*

3. **Try Accessing Settings (Expect Fail)**:
   Attempt to access the protected resource with just the first factor.

   ```bash
   curl --location --request POST 'http://localhost:8080/user/settings' \
   --header 'Authorization: Bearer <TOKEN>'
   ```

   *IMPORTANT !!!! Result: **403 Forbidden** (You lack the **OTT_AUTHORITY**).*

4. **Generate OTP**:
   Request an OTP code.

   ```bash
   curl -X POST http://localhost:8080/ott \
     -H "Authorization: Bearer <TOKEN_1>"
   ```

   *Note: Since the OTP is stored in memory and not returned, you will need to check your debug console or add a System.out.println(ott.getTokenValue()) in OttController to see the generated code.*

5. **Upgrade Token (Factor 2)**:
   Exchange your current token and the OTP for a new, stronger token.

   ```bash
   curl -v -X POST "http://localhost:8080/ott/login?ott=<OTP_CODE>" \
     -H "Authorization: Bearer <TOKEN_1>"
   ```

   *Copy the **new** **Authorization** header token. Let's call this **TOKEN_2**.*

6. **Access Settings (Expect Success)**:
   Access the protected resource with the upgraded token.

   ```bash
   curl -v http://localhost:8080/user/settings \
     -H "Authorization: Bearer <TOKEN_2>"
   ```

   *Result: **200 OK** `{"secret": "You have accessed the secure vault!"}`.*