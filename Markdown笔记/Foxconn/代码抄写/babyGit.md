# Baby Git

Git 初次提交的代码由 10 个相关的代码文件组成：

- Makefile：构建文件，其中包含一组用于将其他源代码文件构建为可执行文件的命令。
- cache.h：Baby Git 唯一的头文件。定义了剩下 .c 源代码文件中使用的许多函数签名、结构体、宏以及其他设置。
- init-db：初始化一个新的 Git 仓库，相当于 git init。
- update-cache：添加一个新文件到暂存区，相当于 git add。
- read-cache：包含一组其他 .c 源代码文件用于从 Git 仓库中检索信息的辅助函数。
- write-tree：根据当前索引内容在 Git 仓库中创建树对象（即目录结构）。
- commit-tree：在 Git 仓库中创建一个新的提交对象。相当于 git commit。
- read-tree：从 Git 仓库中打印出树（即目录结构）的内容。
- cat-file：从 Git 仓库中检索对象的内容，并将其存储在当前目录中的临时文件中。相当于 git show。
- show-diff：显示索引中暂存的文件与文件系统中存在的这些文件的当前版本之间的差异。相当于 git diff。