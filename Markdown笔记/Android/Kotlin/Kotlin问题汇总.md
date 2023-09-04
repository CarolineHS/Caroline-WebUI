#### 真机安装调试

查看真机的Android版本，将build.gradle文件中的minSdk改为手机的Android版本，点Sync Now更新设置

#### apk安装失败

在gradle.properties全局配置中设置android.injected.testOnly=false

#### Unresolved reference:

在activity_main.xml中出现已注册id，但是mainActivity无法找到button的情况，要在build.gradle文件中导入kotin-android-extensions的包

在MainActivity加入包，`import kotlinx.android.synthetic.main.activity_main.*`

如果kotlinx 报红了，要在app的build.gradle文件中添加：`kotlin-android-extensions`包

#### 继承Fragment失败

有两个不同的Fragment可以选择，一个是系统内置的android.app.Fragment，一个是AndroidX库中的android.fragment.app.Fragment，这里要用AndroidX库中的Fragment。但是我在继承Fragment时失败了，解决办法是：在build.gradle文件中添加依赖`implementation 'androidx.fragment:fragment-ktx:1.6.1'`，然后再继承Fragment就出现了AndroidX库的选项，自动导包成功。

#### 报错解决办法

```
e: This version (1.3.2) of the Compose Compiler requires Kotlin version 1.7.20 but you appear to be using Kotlin version 1.9.10 which is not known to be compatible.  Please fix your configuration (or `suppressKotlinVersionCompatibilityCheck` but don't say I didn't warn you!).
e： 此版本（1.3.2）的Compose编译器需要Kotlin 1.7.20版本，但您使用的Kotlin 1.9.10版本并不兼容。请修复您的配置（或“suppressKotlinVersionCompatibilityCheck”，但不要说我没有警告您！）。
```

工程下的build.gradle

```
plugins {
    id 'com.android.application' version '8.0.2' apply false
    id 'com.android.library' version '8.0.2' apply false
    id 'org.jetbrains.kotlin.android' version '1.7.20' apply false
}
// 将原本的1.9.10改为1.7.20即可
```

或者更改build.gradle(app)中的以下版本

```Android
composeOptions {
        kotlinCompilerExtensionVersion '1.3.2'
        }
```

版本兼容关系参考链接：https://developer.android.com/jetpack/androidx/releases/compose-kotlin?hl=zh-cn

#### 新建activity_main.xml文件失败

按照New->XML->Layout xml File新建activity_main.xml无法建立，会显示layout name must be unique，直接New->File然后将文件命名为activity_main.xml即可，报红是因为文件还是空的，写入内容就OK了。