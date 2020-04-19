function convertHTML(str) {
  const htmlObj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"' : '&quot;',
    '\'': '&apos;'
  };
  let res = str.split('')
      .map((a) => htmlObj[a] || a)
      .join('');
  return res;
}

convertHTML("Dolce & Gabbana");
