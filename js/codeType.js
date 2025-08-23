const languageStyle = (str) => {
  /* �����Ż� */
  if (['js', 'javascript'].includes(str)) return 'JavaScript'
  if (['ts', 'typescript'].includes(str)) return 'TypeScript'
  /* ���߾ȹ�(Highlight��֧��vue) */
  if (str === 'xml') return 'Vue'
  
  // return str
  /* ȫСд��� */
  return str.toUpperCase()
  /*ȫ��д��� */
  // return str[0].toUpperCase() + str.substring(1)
  /*����ĸ��д��� */
}

document.querySelectorAll('figure.highlight').forEach((item) => {
  item.setAttribute('data-type', languageStyle(item.getAttribute('class').substring(10)))
})