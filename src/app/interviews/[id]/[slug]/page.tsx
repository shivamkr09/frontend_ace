"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useTheme } from "next-themes";
import Split from "react-split";
import {
  ChevronLeft,
  Code2,
  FileText,
  Settings,
  Terminal,
  Check,
  Play,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../../../../components/ui/button";
import { Badge } from "../../../../components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../../components/ui/select";
import { Description } from "../../../../components/interviews/description";
import { Editor } from "@monaco-editor/react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "../../../../components/ui/resizable";
import { ProblemDescription } from "../../../../components/practice/problem-description";

interface Challenge {
  title: string;
  difficulty: string;
  initialCode: string;
}
const languages = {
  cpp: `#include <iostream>
  
  int main() {
      std::cout << "Hello, World!" << std::endl;
      return 0;
  }`,
  javascript: `function greet(name) {
    console.log(\`Hello, \${name}!\`);
  }
  
  greet('World');`,
  python: `def greet(name):
      print(f"Hello, {name}!")
  
  greet("World")`,
  java: `public class HelloWorld {
      public static void main(String[] args) {
          System.out.println("Hello, World!");
      }
  }`,
};


const challenges: { [key: string]: Challenge } = {
  reverseString: {
    title: "Reverse a String",
    difficulty: "Easy",
    initialCode: `/**
 * @param {string} str
 * @return {string}
 */
export default function reverseString(str) {
  throw 'Not implemented!';
}`,
  },
  isPalindrome: {
    title: "Check for Palindrome",
    difficulty: "Easy",
    initialCode: `/**
 * @param {string} str
 * @return {boolean}
 */
export default function isPalindrome(str) {
  throw 'Not implemented!';
}`,
  },
  findMax: {
    title: "Find Max Number in Array",
    difficulty: "Easy",
    initialCode: `/**
 * @param {number[]} arr
 * @return {number}
 */
export default function findMax(arr) {
  throw 'Not implemented!';
}`,
  },
  capitalizeWords: {
    title: "Capitalize First Letter",
    difficulty: "Easy",
    initialCode: `/**
 * @param {string} str
 * @return {string}
 */
export default function capitalizeWords(str) {
  throw 'Not implemented!';
}`,
  },
  removeDuplicates: {
    title: "Remove Duplicates from Array",
    difficulty: "Easy",
    initialCode: `/**
 * @param {Array} arr
 * @return {Array}
 */
export default function removeDuplicates(arr) {
  throw 'Not implemented!';
}`,
  },
  flatten: {
    title: "Flatten Nested Arrays",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Array} arr
 * @return {Array}
 */
export default function flatten(arr) {
  throw 'Not implemented!';
}`,
  },
  deepClone: {
    title: "Deep Clone an Object",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Object} obj
 * @return {Object}
 */
export default function deepClone(obj) {
  throw 'Not implemented!';
}`,
  },
  debounce: {
    title: "Debounce Function",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
export default function debounce(fn, delay) {
  throw 'Not implemented!';
}`,
  },
  throttle: {
    title: "Throttle Function",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Function} fn
 * @param {number} interval
 * @return {Function}
 */
export default function throttle(fn, interval) {
  throw 'Not implemented!';
}`,
  },
  bind: {
    title: "Implement Bind",
    difficulty: "Hard",
    initialCode: `/**
 * @param {Function} fn
 * @param {any} context
 * @return {Function}
 */
export default function bind(fn, context) {
  throw 'Not implemented!';
}`,
  },
  curry: {
    title: "Currying a Function",
    difficulty: "Hard",
    initialCode: `/**
 * @param {Function} fn
 * @return {Function}
 */
export default function curry(fn) {
  throw 'Not implemented!';
}`,
  },
  compose: {
    title: "Compose Functions",
    difficulty: "Hard",
    initialCode: `/**
 * @param {Function[]} funcs
 * @return {Function}
 */
export default function compose(funcs) {
  throw 'Not implemented!';
}`,
  },
  structuredCloneUtil: {
    title: "Clone with Structured Clone",
    difficulty: "Medium",
    initialCode: `/**
 * @param {any} value
 * @return {any}
 */
export default function structuredCloneUtil(value) {
  throw 'Not implemented!';
}`,
  },

  // Existing ones
  memoize: {
    title: "Memoize",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Function} fn
 * @return {Function}
 */
export default function memoize(fn) {
  throw 'Not implemented!';
}`,
  },
  once: {
    title: "Once",
    difficulty: "Easy",
    initialCode: `/**
 * @param {Function} fn
 * @return {Function}
 */
export default function once(fn) {
  throw 'Not implemented!';
}`,
  },
  deepEqual: {
    title: "Deep Equal",
    difficulty: "Medium",
    initialCode: `/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
export default function deepEqual(a, b) {
  throw 'Not implemented!';
}`,
  },
  eventEmitter: {
    title: "Event Emitter",
    difficulty: "Medium",
    initialCode: `/**
 * @return {Object}
 */
export default function createEventEmitter() {
  throw 'Not implemented!';
}`,
  },
  arrayMap: {
    title: "Array.prototype.map",
    difficulty: "Easy",
    initialCode: `/**
 * @param {Function} callback
 * @return {Array}
 */
Array.prototype.myMap = function(callback) {
  throw 'Not implemented!';
};`,
  },
  arrayFilter: {
    title: "Array.prototype.filter",
    difficulty: "Easy",
    initialCode: `/**
 * @param {Function} callback
 * @return {Array}
 */
Array.prototype.myFilter = function(callback) {
  throw 'Not implemented!';
};`,
  },
  isAnagram: {
    title: "Is Anagram",
    difficulty: "Easy",
    initialCode: `/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export default function isAnagram(str1, str2) {
  throw 'Not implemented!';
}`,
  },
  groupBy: {
    title: "Group By",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Array} list
 * @param {Function|string} key
 * @return {Object}
 */
export default function groupBy(list, key) {
  throw 'Not implemented!';
}`,
  },
  retryFunction: {
    title: "Retry Function",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Function} fn
 * @param {number} retries
 * @return {Function}
 */
export default function retry(fn, retries) {
  throw 'Not implemented!';
}`,
  },
  sleep: {
    title: "Sleep",
    difficulty: "Easy",
    initialCode: `/**
 * @param {number} ms
 * @return {Promise<void>}
 */
export default function sleep(ms) {
  throw 'Not implemented!';
}`,
  },
  promiseAll: {
    title: "Promise.all",
    difficulty: "Hard",
    initialCode: `/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
export default function promiseAll(promises) {
  throw 'Not implemented!';
}`,
  },
  promiseRace: {
    title: "Promise.race",
    difficulty: "Hard",
    initialCode: `/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
export default function promiseRace(promises) {
  throw 'Not implemented!';
}`,
  },
  throttleClick: {
    title: "Throttle Click Events",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Function} fn
 * @param {number} limit
 * @return {Function}
 */
export default function throttleClick(fn, limit) {
  throw 'Not implemented!';
}`,
  },
  debounceInput: {
    title: "Debounce Input",
    difficulty: "Medium",
    initialCode: `/**
 * @param {Function} fn
 * @param {number} delay
 * @return {Function}
 */
export default function debounceInput(fn, delay) {
  throw 'Not implemented!';
}`,
  },
  customInstanceof: {
    title: "Custom instanceof",
    difficulty: "Medium",
    initialCode: `/**
 * @param {any} obj
 * @param {Function} constructor
 * @return {boolean}
 */
export default function customInstanceof(obj, constructor) {
  throw 'Not implemented!';
}`,
  },
};




export default function ChallengePage() {
  const params = useParams();
  const challenge = challenges[params.slug as string];

  const [language, setLanguage] = useState<keyof typeof languages>("cpp");
  const [code, setCode] = useState(languages[language]);
  const [theme, setTheme] = useState<"vs-dark" | "light" | "dracula">(
    "vs-dark"
  );
  const [output, setOutput] = useState<string>("");
  const [isCompiling, setIsCompiling] = useState(false);

  const handleLanguageChange = (newLanguage: keyof typeof languages) => {
    setLanguage(newLanguage);
    setCode(languages[newLanguage]);
  };

  const executeCode = async () => {
    setIsCompiling(true);
    setOutput("");
    try {
      const languageMap: Record<string, string> = {
        cpp: "cpp",
        java: "java",
        javascript: "javascript",
        python: "python"
      };

      const versionMap: Record<string, string> = {
        cpp: "10.2.0",
        java: "15.0.2",
        javascript: "18.15.0",
        python: "3.10.0"
      };

      const pistonLang = languageMap[language];
      const version = versionMap[language];

      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: pistonLang,
          version: version,
          files: [
            {
              name: `Main.${language === "cpp" ? "cpp" : language === "java" ? "java" : language === "python" ? "py" : "js"}`,
              content: code,
            },
          ],
        }),
      });

      const data = await response.json();
      setOutput(data.run.output);
    } catch (error) {
      console.error("Error executing code:", error);
      setOutput("Failed to execute code.");
    }
    finally {
      setIsCompiling(false);
    }
  };

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      window.dispatchEvent(new Event("resize"));
    });
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, []);

  if (!challenge) {
    return <div>Challenge not found</div>;
  }

  return (
    <div className="flex h-screen overflow-hidden ">
      <div className="flex-1 flex flex-col overflow-hidden">
        
        <div className="flex-1 overflow-hidden">
          <div className="h-[calc(100vh-3.5rem)]">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={35}>
                <div className="flex h-full flex-col overflow-hidden">
                  <div className="flex items-center gap-4 border-b border-purple-500/20  px-4 py-2">
                    <Button variant="ghost" className="">
                      <FileText className="mr-2 h-4 w-4" />
                      Description
                    </Button>
                    <Button variant="ghost" className="">
                      <Terminal className="mr-2 h-4 w-4" />
                      Test Cases
                    </Button>
                  </div>
                  <div className="flex-1 overflow-y-auto p-6">
                    <Description challenge={challenge} />
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={65}>
                <div className="flex h-full flex-col overflow-hidden">
                  <div className="flex items-center justify-between gap-4 border-b border-purple-500/20 bg-white/5 px-4 py-2">
                    <div className="flex items-center gap-2">
                      <Select
                        value={language}
                        onValueChange={(value: keyof typeof languages) =>
                          handleLanguageChange(value)
                        }
                      >
                        <SelectTrigger className="w-[140px] border-purple-500/20 ">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent className="border-purple-500/20bg-slate-800 text-purple-50">
                          <SelectItem value="cpp">C++</SelectItem>
                          <SelectItem value="javascript">JavaScript</SelectItem>
                          <SelectItem value="python">Python</SelectItem>
                          <SelectItem value="java">Java</SelectItem>
                        </SelectContent>
                      </Select>
                      <Select
                        value={theme}
                        onValueChange={(value: "vs-dark" | "light" | "dracula") =>
                          setTheme(value)
                        }
                      >
                        <SelectTrigger className="w-[140px] border-purple-500/20 ">
                          <SelectValue placeholder="Select theme" />
                        </SelectTrigger>
                        <SelectContent className="border-purple-500/20 ">
                          <SelectItem value="vs-dark">Dark</SelectItem>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dracula">Dracula</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* <Button
                        variant="outline"
                        onClick={executeCode}
                        size="sm"
                        className="border-purple-500/20   "
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Run Tests
                      </Button> */}
                      <Button
                        variant="outline"
                        onClick={executeCode}
                        size="sm"
                        className="border-purple-500/20   "
                        disabled={isCompiling}
                      >
                        {isCompiling ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Compiling...
                          </>
                        ) : (
                          <>
                            <Play className="mr-2 h-4 w-4" /> Run
                          </>
                        )}
                      </Button>
                      <Button disabled size="sm" className=" ">
                        <Check className="mr-2 h-4 w-4" />
                        Submit
                      </Button>
                    </div>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <Editor
                      value={code}
                      onChange={(value) => setCode(value!)}
                      theme={theme}
                      language={language}
                    />
                  </div>
                  <div className="border-t border-purple-500/20 bg-black text-white px-4 py-2 text-sm overflow-y-auto h-32 max-h-40">
                    {!output &&<strong >See outputs here</strong>}
                    <pre className="whitespace-pre-wrap mt-1">{output}</pre>
                  </div>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
