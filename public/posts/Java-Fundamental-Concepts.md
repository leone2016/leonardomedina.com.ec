# Java Fundamental Concepts

## About Java

**Brief History**. The java language began as a language for programming electronic devices, though the original project was never complete. Its creator was **James Gosling**, of sun microsystems. The language was develop privately starting in 1991 and was made publicly available in 1994. in 2009, Oracle bought the rights to java from Sun Microsystems.



## JDK, JRE, JVM

Think of the relationship as: **JDK > JRE > JVM**

**JDK (Java Development Kit):** The **Suitcase**. It wraps around the JRE and adds the tools needed to *write* and *compile* code (like the compiler **javac**).

**JRE (Java Runtime Environment):** The **Body**. It wraps around the JVM and adds the "libraries" (pre-written code) needed to run a program.

**JVM (Java Virtual Machine):** The **Heart**. It is the engine that actually executes the code line-by-line.



### Summary Table

| **Acronym** | **Stands For**           | **Contains**              | **Who needs it?**                    |
| ----------- | ------------------------ | ------------------------- | ------------------------------------ |
| **JVM**     | Java Virtual Machine     | Just the execution engine | The Computer                         |
| **JRE**     | Java Runtime Environment | JVM + Libraries           | **Gamers** (Users who just run apps) |
| **JDK**     | Java Development Kit     | JRE + Compiler/Tools      | **Programmers** (You)                |

![relationship-jdk-jre-jvm](https://raw.githubusercontent.com/leone2016/leonardomedina.com.ec/refs/heads/main/public/jdkJreJVM.png)

## What is the JVM?

- **JVM (Java Virtual Machine)** is an *abstract machine* that provides a **runtime environment** to execute Java applications. It sits *inside* the Java Runtime Environment (JRE). 
- Java code is **compiled to bytecode (.class files)** and the JVM **interprets/executes** that bytecode on any supported platform. 
- Because the bytecode isn’t platform-specific, Java programs can run on *many platforms without modification* — this is the famous Java “Write Once, Run Anywhere (WORA)” principle. 



______________

## How the JVM Works (Step by Step)

When you run a Java program, the JVM acts as a **runtime engine** and performs the following steps:

1. **Compilation**
   - **javac** converts **.java** files into **.class** files (bytecode)
2. **Class Loading**
   - The JVM loads required classes into memory
3. **Bytecode Verification**
   - The JVM checks that the bytecode is valid and secure
4. **Execution**
   - The JVM executes the bytecode using an interpreter or the JIT compiler

This entire process happens **automatically**, without the developer needing to manage memory or CPU instructions manually.

![](https://raw.githubusercontent.com/leone2016/leonardomedina.com.ec/refs/heads/main/public/javac.png)

------

## Why Do We Need the JVM?

The JVM does much more than just running code. It is responsible for:

- Loading and verifying classes
- Managing memory
- Executing bytecode
- Handling garbage collection
- Providing security
- Reporting runtime errors

Without the JVM, Java would lose its portability, safety, and reliability.

-------

### JVM Architecture

There are three main subsystems in JVM Architecture:

**1.** ClassLoader

**2.** Memory Area

**3.** Execution Engine

![jvm architecture](https://raw.githubusercontent.com/leone2016/leonardomedina.com.ec/refs/heads/main/public/jvmarch.png)



## 1. ClassLoader Subsystem

The **ClassLoader** is responsible for loading **.class** files into memory.

Java uses a **hierarchical class loading mechanism**, which includes three built-in class loaders:

### Bootstrap ClassLoader

- Loads core Java classes
- Loads classes from **rt.jar**
- Written in native code

### Extension ClassLoader

- Loads classes from extension directories
- Child of Bootstrap ClassLoader

### System (Application) ClassLoader

- Loads application classes from the classpath
- This is the most commonly used class loader

### ClassLoader Phases

The ClassLoader works in three phases:

#### 1. Loading

- Reads **.class** files from disk
- Stores class metadata in the **Method Area**
- Creates a  **Class** object in heap memory

#### 2. Linking

Includes:

- **Verification**: Checks bytecode correctness
- **Preparation**: Allocates memory for static variables
- **Resolution**: Replaces symbolic references with direct references

#### 3. Initialization

- Assigns values to static variables
- Executes static blocks
- Happens from parent class to child class

### Example: Checking the ClassLoader

```
public class Test1 {
    public static void main(String[] args) {
        System.out.println(Test1.class.getClassLoader());
        System.out.println(String.class.getClassLoader());
    }
}
```

Output:

```
sun.misc.Launcher$AppClassLoader@659e0bfd
null
```

**String** returns **null** because it is loaded by the **Bootstrap ClassLoader**.

## 2. JVM Memory Areas

The JVM divides memory into several runtime areas:

### Method Area

- Stores class metadata
- Method information
- Runtime constant pool

### Heap

- Stores all objects
- Shared across threads
- Managed by Garbage Collector

### Stack

- Created per thread
- Stores local variables and method calls
- Uses stack frames

### PC Register

- Keeps track of the current instruction

### Native Method Stack

- Supports native code written in C/C++

## 3. Execution Engine

The **Execution Engine** is responsible for running bytecode instructions.

It has three main components:

### Interpreter

- Reads bytecode line by line
- Simple but slower

### Just-In-Time (JIT) Compiler

- Compiles frequently used bytecode into native machine code
- Improves performance significantly

### Virtual Processor

- Coordinates execution at runtime

Modern JVMs rely heavily on **JIT compilation**, which is why Java performance has improved drastically over the years.

## Native Method Interface (JNI)

The **Java Native Interface (JNI)** allows Java code to interact with **native libraries** written in languages like C or C++.

This is useful for:

- System-level operations
- Performance-critical tasks
- Using existing native libraries

## Key Takeaways

- The JVM is the heart of Java’s platform independence
- Java code is compiled into bytecode, not machine code
- JVM handles memory, execution, and security
- JIT compilation makes Java fast
- Understanding the JVM helps you write better and more efficient Java code

## Final Thoughts

The JVM is not just a runtime tool; it is a **sophisticated execution environment** that makes Java powerful, portable, and secure.

As a Java developer, understanding how the JVM works gives you a **huge advantage**, especially when dealing with performance, memory issues, or large-scale systems.

If you master the JVM, you don’t just write Java — you **understand it**.





