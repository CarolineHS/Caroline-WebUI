1. 扩容硬盘容量，输出扩容后的硬盘最大容量，点击编辑虚拟机设置---硬盘---扩展，如果扩展是灰色的，删除所有快照就可以点击了
2. 进入Ubuntu，`sudo df -h`查看现有硬盘容量，第四行`/dev/sda1`后的容量就是
3. 操作之前可以使用虚拟机快照备份一下，以防万一
4. 使用`sudo fdisk /dev/sda`后输入`d`删除分区，如果不理解每个命令的含义，可以输入m命令帮助。
5. 删除分区后创建分区，输入`n`，回车，再输入`p`，回车，+40G（在提示First sector时回车，在Last sector输入+40G），弹出`Created a new partition 1 of type 'linux'...`表示成功
6. 继续输入p命令，查看硬盘容量Size是否有变化，确认无误后再输入a，然后输入分区编号1（/dev/sda1），再w命令保存。输入q退出命令行
7. 接下来使用`sudo reboot`重启虚拟机，待重启完成后打开终端执行命令`sudo resize2fs /dev/sda1`命令执行完成后输入`df -h`查看硬盘已成功扩容了