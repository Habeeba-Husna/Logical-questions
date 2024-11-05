/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    
    for (const a of magazine) {
    ransomNote = ransomNote.replace(a,"");
  }
  
  if (!ransomNote) return true;
  else return false;
};