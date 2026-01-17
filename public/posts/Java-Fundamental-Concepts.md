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

## How the JVM Works (Step by Step)

When you run a Java program, the JVM acts as a **runtime engine** and performs the following steps:

1. **Compilation**
   - `javac` converts `.java` files into `.class` files (bytecode)
2. **Class Loading**
   - The JVM loads required classes into memory
3. **Bytecode Verification**
   - The JVM checks that the bytecode is valid and secure
4. **Execution**
   - The JVM executes the bytecode using an interpreter or the JIT compiler

This entire process happens **automatically**, without the developer needing to manage memory or CPU instructions manually.

## What is the JVM?

- **JVM (Java Virtual Machine)** is an *abstract machine* that provides a **runtime environment** to execute Java applications. It sits *inside* the Java Runtime Environment (JRE). 
- Java code is **compiled to bytecode (.class files)** and the JVM **interprets/executes** that bytecode on any supported platform. 
- Because the bytecode isn’t platform-specific, Java programs can run on *many platforms without modification* — this is the famous Java “Write Once, Run Anywhere (WORA)” principle. 

------

### How JVM Works

When you run a Java program:

1. **Compilation**:
   - Source code (`.java`) is compiled into **bytecode** (`.class`) by the Java compiler. 
2. **Loading & Execution**:
   - The **JVM loads** the bytecode, **verifies** it, and then **interprets or executes** it, possibly using **Just-In-Time (JIT) compilation** to optimize performance. 



### JVM Architecture

There are three main subsystems in JVM Architecture:

**1.** ClassLoader

**2.** Memory Area

**3.** Execution Engine

![jvm architecture](https://raw.githubusercontent.com/leone2016/leonardomedina.com.ec/refs/heads/main/public/jvmarch.png)



### Class loader Subsystem 

Handles `.class` file loading.





