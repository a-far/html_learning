HTML使用标签 <a>来设置超文本链接。
超链接可以是一个字，一个词，或者一组词，也可以是一幅图像，您可以点击这些内容来跳转到新的文档或者当前文档中的某个部分。
当您把鼠标指针移动到网页中的某个链接上时，箭头会变为一只小手。
链接的 HTML 代码<a href="url">链接文本</a>
在HTML文档中插入ID:<a id="tips">
  
  
  
<base> 标签描述了基本的链接地址/链接目标，该标签作为HTML文档中所有的链接标签的默认链接:
<link> 标签通常用于链接到样式表
<style> 标签定义了HTML文档的样式文件引用地址.
在<style> 元素中你也可以直接添加样式来渲染 HTML 文档
<meta> 标签提供了元数据.元数据也不显示在页面上，但会被浏览器解析。通常用于指定网页的描述，关键词，文件的最后修改时间，作者，和其他元数据。元数据可以使用于浏览器（如何显示内容或重新加载页面），搜索引擎（关键词），或其他Web服务。
<meta> 一般放置于 <head> 区域
<script>标签用于加载脚本文件，如： JavaScript


为搜索引擎定义关键词:
<meta name="keywords" content="HTML, CSS, XML, XHTML, JavaScript">

为网页定义描述内容:
<meta name="description" content="免费 Web & 编程 教程">

定义网页作者:
<meta name="author" content="Runoob">

每30秒钟刷新当前页面:
<meta http-equiv="refresh" content="30">


font-family（字体），color（颜色），和font-size（字体大小）


内部样式表
当单个文件需要特别样式时，就可以使用内部样式表。你可以在<head> 部分通过 <style>标签定义内部样式表:
<head>
<style type="text/css">
body {background-color:yellow;}
p {color:blue;}
</style>
</head>             [只针对当前html文件有效]
  
 外部样式表
当样式需要被应用到很多页面的时候，外部样式表将是理想的选择。使用外部样式表，你就可以通过更改一个文件来改变整个站点的外观。
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>

内联样式
当特殊的样式需要应用到个别元素时，就可以使用内联样式。 使用内联样式的方法是在相关的标签中使用样式属性。样式属性可以包含任何 CSS 属性。以下实例显示出如何改变段落的颜色和左外边距。
<p style="color:blue;margin-left:20px;">这是一个段落。</p>      【给标签单独加样式，样式无法重复且不易修改】
