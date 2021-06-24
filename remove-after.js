// 7 kyu

// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//=============================================================================

const removeUrlAnchor = (url) => (url.includes('#') ? url.split('#')[0] : url);

console.log(removeUrlAnchor('www.codewars.com/katas/?page=1#about'));
