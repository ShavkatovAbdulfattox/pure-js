/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */

// Example 1:

// Input: s = "abcd", t = "abcde"
// Output: "e"
// Explanation: 'e' is the letter that was added.
// Example 2:

// Input: s = "", t = "y"
// Output: "y"

// const findTheDifference = (s, t) => {
//   if (s.length === 0) {
//     return t;
//   } else if (t.length === 0) {
//     return s;
//   }
//   let longWord = null,
//     shortWord = null;

//   if (s.length > t.length) {
//     longWord = s;
//     shortWord = t;
//   } else if (t.length > s.length) {
//     longWord = t;
//     shortWord = s;
//   }

//   for (let i = 0; i < longWord.length; i++) {
//     const isEqual = longWord[i] !== shortWord[i];
//     console.log(isEqual);
//     if (isEqual) {
//       return longWord.slice(i);
//     } else {
//       return "";
//     }
//   }
// };
var findTheDifference = function (s, t) {
  let r = 0;
  for (let i = 0; i < s.length; i++) {
    r ^= s.charCodeAt(i);
    console.log(s.charCodeAt(i));
    console.log(r);
    console.log("------- first");
  }
  for (let i = 0; i < t.length; i++) {
    r ^= t.charCodeAt(i);
    console.log(r);
    console.log("------- second");
  }
  console.log("------- end");

  console.log(r);
  console.log("------- end");

  return String.fromCharCode(r);
};

console.log(findTheDifference("abcd", "abcdfre")); // Output: "e"
console.log(findTheDifference("", "y")); // Output: "y"

console.log(findTheDifference("abc", "abcdfewfee")); // Output: "e"
// console.log(findTheDifference("", "y")); // Output: "y"

console.log(
  findTheDifference(
    "ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor",
    "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj"
  )
);

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     // console.log(char);
//     console.log("------- First --------");
//     for (let j = 0; j < t.length; j++) {
//       const letter = t[j];

//       if (char !== letter) {
//         // console.log(char !== letter);
//         // t.slice(0, i);
//       }
//       //   console.log(element);
//       console.log("------- second --------");
//     }
//   }
//   return t;

//   for (let i = 0; i < s.length; i++) {
//     const isNotTrue = s[i] !== t[i];
//     if (isNotTrue) {
//       console.log("is not true");
//     }
//   }
//   console.log("---");
//   return t.slice(0, i);
