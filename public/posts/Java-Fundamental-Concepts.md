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

## JVM Architecture

![JVM Architecture](https://raw.githubusercontent.com/leone2016/leonardomedina.com.ec/refs/heads/main/public/jvm_arch.png)