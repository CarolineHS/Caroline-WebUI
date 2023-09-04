Kotlin代码后不用加分号

#### 变量

Kotlin定义变量只需要声明两种关键字

val（value）用来声明一个不可变的变量，在初始赋值之后就不能被重新赋值。

var（variable）用来声明一个可变的变量，在初始赋值之后仍然可以被重新赋值。

Kotlin有类型推导机制，但如果对变量延迟赋值，Kotlin就无法自动推导类型了，所以需要显式声明变量类型，例如：`val a: Int = 10`

Kotlin使用的是对象数据类型，而抛弃了Java中的基本数据类型，int,long,short,float,double,boolean,char,byte等首字母都为大写。



