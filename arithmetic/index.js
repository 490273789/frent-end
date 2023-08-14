// 逻辑结构：数据元素之间抽象化的相互关系，独立于计算机，是从具体问题中抽象出来的数学模型
// 逻辑结构分类：集合、线性结构、树形结构、图形结构

// 存储结构：数据元素及其关系在计算机中的存储方式
// 存储结构分类：顺序存储、链式存储、散列存储、索引存储

// 算法：是指对特定问题的求解步骤的一种描述
// 通常是以算法执行所消耗的 时间 和所占用的 空间 来判断一个算法的优劣

// 算法特点
// 有穷性：由若干条指令组成的又穷序列，不可能永不停止
// 确定性：每条语句有确定的含义，无歧义
// 可行性：算法在当前环境条件下可以通过有限次运算实现
// 输入：有0个货多个输入
// 输出：有0个或多个输出

// 时间复杂度
// 算法执行需要的时间，一般算法将基本运算的执行次数作为时间的复杂度的度量标准

// 线性表的两种存储结构 链表 和 顺序表
// 顺序表：计算机中的连续存储空间
// 特点 查询和修改快 ，插入，删除消耗性能大
// 插入操作，插入位置之后的所有元素都要向后移动一位
// 删除操作，删除位置之后的所有元素都要向前移动一位

// 链表 - 分散存储，通过指针链接
// 链表中的数据单位叫“节点”，节点在内存中的分布式离散的
// 链表中每个结点的结构都包含了两部分内容：1、数据域  2、指针域
// 链表和数组的使用
// 在添加或删除数据结构的时候，链表的新能更加高效，只需要改变目标节点及前驱/后继节点的指针，复杂度为O(1)
// 数组在改变一个元素（非尾部元素），后面的元素的位置都需要向后移动假设十足的长度是n，增加或者删除需要移动的元素量，就会随着数组的长度n的增大而增大，成一个线性关系，复杂度是O(n)
// 在查找元素的时候数组更加的高效，可以直接通过位置进行查找，复杂度为O(1)
// 链表只能从头部元素一个一个的向后面查找,复杂度为O(n)
// js中的数组: 如果是相同类型的元素，那么对应的确实是连续内存
// 如果定义了不同类型的元素，它对应的就是一段非连续内存，此时js数组不在具有数组的特征，其底层使用哈希映射分配内存空间，是由对象链表来实现的
// 什么是真正的数组定义： 存储在连续内存空间里

// 单链表
// 首节点：第一个存放元素的节点
// 头节点：第一个存放指针的节点（可以没数据）
// 头指针：第一个指针
// 插入一个节点的流程，比如在 a1.next = a2,我要在a1 和 a2之间插入一个 a3  
// 头插法（逆序建表） 第一步将a3.next = a2，第二步：将a1.next = a3
// 尾差法（正序建表） 将尾指针指向新的元素
// 查找
// 删除 a1.next = a2; a2.next = a3,现在要删除a2，a1.next = a2.next

// 双向链表
// 单链表只能向后操作，为了方便向前向后操作，可以给每个元素添加两个指针
