import Link from "next/link"
import { ChevronRight, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function QuestionList({id}:{id:string}) {
  return (
    <div className="flex flex-col gap space-y-4 ">
      {questions.map((question) => (
        <Link key={question.id} href={`/interviews/${id}/${question.slug}`}>
          <Card className="group relative overflow-hidden border-purple-500/20  p-6 transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.2)] hover:backdrop-blur-xl">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/20 text-sm font-semibold ">
                    {question.number}
                  </span>
                  <h3 className="text-lg font-semibold ">{question.title}</h3>
                  {question.isPro && <Star className="h-5 w-5 text-amber-400 fill-amber-400" />}
                </div>
                <p className="text-sm ">{question.description}</p>
                <div className="flex flex-wrap gap-2">
                  {question.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className={cn(
                        "rounded-lg px-3 py-1 text-xs font-medium",
                        tag === "Easy" && " hover:bg-emerald-500/30",
                        tag === "Medium" && " hover:bg-amber-500/30",
                        tag === "Hard" && " hover:bg-rose-500/30",
                        tag === "JS functions" && " hover:bg-blue-500/30",
                      )}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </div>
          </Card>
        </Link>
      ))}
    </div>
  )
}

const questions = [
  {
    id: 1,
    number: 1,
    title: "Reverse a String",
    slug: "reverseString",
    description: "Write a function that takes a string as input and returns the string reversed.",
    tags: ["JS strings", "Easy"],
    isPro: false,
  },
  {
    id: 2,
    number: 2,
    title: "Check for Palindrome",
    slug: "isPalindrome",
    description: "Determine if the given string is a palindrome.",
    tags: ["JS strings", "Easy"],
    isPro: false,
  },
  {
    id: 3,
    number: 3,
    title: "Find Max Number in Array",
    slug: "findMax",
    description: "Find and return the maximum number in the given array.",
    tags: ["JS arrays", "Easy"],
    isPro: false,
  },
  {
    id: 4,
    number: 4,
    title: "Capitalize First Letter",
    slug: "capitalizeWords",
    description: "Capitalize the first letter of each word in a string.",
    tags: ["JS strings", "Easy"],
    isPro: false,
  },
  {
    id: 5,
    number: 5,
    title: "Remove Duplicates from Array",
    slug: "removeDuplicates",
    description: "Write a function to remove duplicate values from an array.",
    tags: ["JS arrays", "Easy"],
    isPro: false,
  },
  {
    id: 6,
    number: 6,
    title: "Flatten Nested Arrays",
    slug: "flatten",
    description: "Flatten a nested array structure into a single array.",
    tags: ["JS arrays", "Medium"],
    isPro: true,
  },
  {
    id: 7,
    number: 7,
    title: "Deep Clone an Object",
    slug: "deepClone",
    description: "Implement a function to deep clone a JavaScript object.",
    tags: ["JS objects", "Medium"],
    isPro: true,
  },
  {
    id: 8,
    number: 8,
    title: "Debounce Function",
    slug: "debounce",
    description: "Implement a function that delays invoking a function until after a wait time.",
    tags: ["JS functions", "Medium"],
    isPro: true,
  },
  {
    id: 9,
    number: 9,
    title: "Throttle Function",
    slug: "throttle",
    description: "Create a function that limits execution to once per specified time interval.",
    tags: ["JS functions", "Medium"],
    isPro: true,
  },
  {
    id: 10,
    number: 10,
    title: "Implement Bind",
    slug: "bind",
    description: "Recreate the native JavaScript bind function.",
    tags: ["JS functions", "Hard"],
    isPro: true,
  },
  {
    id: 11,
    number: 11,
    title: "Currying a Function",
    slug: "curry",
    description: "Transform a function so that it can be called in a curried way.",
    tags: ["JS functions", "Hard"],
    isPro: true,
  },
  {
    id: 12,
    number: 12,
    title: "Compose Functions",
    slug: "compose",
    description: "Implement a function composition utility.",
    tags: ["JS functions", "Hard"],
    isPro: true,
  },
  {
    id: 13,
    number: 13,
    title: "Clone with Structured Clone",
    slug: "structuredCloneUtil",
    description: "Use the structured clone algorithm to deeply copy a value.",
    tags: ["JS objects", "Medium"],
    isPro: true,
  },
  {
    id: 14,
    number: 14,
    title: "Memoize",
    slug: "memoize",
    description: "Implement a function that caches results of function calls to avoid redundant calculations.",
    tags: ["JS functions", "Medium"],
    isPro: true,
  },
  {
    id: 15,
    number: 15,
    title: "Once",
    slug: "once",
    description: "Write a function that allows another function to be called only once.",
    tags: ["JS functions", "Easy"],
    isPro: false,
  },
  {
    id: 16,
    number: 16,
    title: "Deep Equal",
    slug: "deepEqual",
    description: "Compare two values deeply to determine if they are equal.",
    tags: ["JS objects", "Medium"],
    isPro: true,
  },
  {
    id: 17,
    number: 17,
    title: "Event Emitter",
    slug: "evenEmitter",
    description: "Create a custom event emitter with subscribe, emit, and unsubscribe functionality.",
    tags: ["JS patterns", "Medium"],
    isPro: true,
  },
  {
    id: 18,
    number: 18,
    title: "Array.prototype.map",
    slug: "array-prototype-map",
    description: "Recreate the behavior of the native Array.prototype.map function.",
    tags: ["JS arrays", "Easy"],
    isPro: false,
  },
  {
    id: 19,
    number: 19,
    title: "Array.prototype.filter",
    slug: "arrayPrototypeFilter",
    description: "Recreate the behavior of the native Array.prototype.filter function.",
    tags: ["JS arrays", "Easy"],
    isPro: false,
  },
  {
    id: 20,
    number: 20,
    title: "Is Anagram",
    slug: "isAnagram",
    description: "Write a function that checks whether two strings are anagrams.",
    tags: ["JS strings", "Easy"],
    isPro: false,
  },
  {
    id: 21,
    number: 21,
    title: "Group By",
    slug: "groupBy",
    description: "Write a utility that groups an array of objects by a specified key.",
    tags: ["JS objects", "Medium"],
    isPro: true,
  },
  {
    id: 22,
    number: 22,
    title: "Retry Function",
    slug: "retryFunction",
    description: "Implement a retry mechanism for async functions that fail.",
    tags: ["JS async", "Medium"],
    isPro: true,
  },
  {
    id: 23,
    number: 23,
    title: "Sleep",
    slug: "sleep",
    description: "Implement a sleep function that pauses execution for a given number of milliseconds.",
    tags: ["JS async", "Easy"],
    isPro: false,
  },
  {
    id: 24,
    number: 24,
    title: "Promise.all",
    slug: "promiseAll",
    description: "Recreate the behavior of Promise.all using vanilla JavaScript.",
    tags: ["JS promises", "Hard"],
    isPro: true,
  },
  {
    id: 25,
    number: 25,
    title: "Promise.race",
    slug: "promiseRace",
    description: "Recreate the behavior of Promise.race using vanilla JavaScript.",
    tags: ["JS promises", "Hard"],
    isPro: true,
  },
  {
    id: 26,
    number: 26,
    title: "Throttle Click Events",
    slug: "throttleClickEvents",
    description: "Limit a click handler from firing too frequently using throttling.",
    tags: ["JS DOM", "Medium"],
    isPro: false,
  },
  {
    id: 27,
    number: 27,
    title: "Debounce Input",
    slug: "debounceInput",
    description: "Debounce a search input so the API is not called on every keystroke.",
    tags: ["JS DOM", "Medium"],
    isPro: false,
  },
  {
    id: 28,
    number: 28,
    title: "Custom instanceof",
    slug: "customInstanceOf",
    description: "Implement a function to simulate the instanceof operator behavior.",
    tags: ["JS operators", "Medium"],
    isPro: true,
  },
];
