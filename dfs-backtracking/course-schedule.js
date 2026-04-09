

/**
 * Determines whether all courses can be completed given prerequisite pairs.
 *
 * Each course is represented as an integer from 0 to numCourses - 1.
 * Prerequisites are given as pairs [course, prereq], meaning `course`
 * requires `prereq` to be completed first.
 *
 * The function detects cycles in the directed graph formed by prerequisites.
 * If a cycle exists, it is impossible to finish all courses.
 *
 * Approach:
 * - Build an adjacency list (Map) of course → prerequisites.
 * - Use DFS with a `visited` set to detect cycles in the recursion stack.
 * - If any DFS call detects a cycle, return false.
 * - Otherwise, all courses can be completed.
 *
 * Time Complexity: O(numCourses + prereq.length)
 * Space Complexity: O(numCourses)
 * 
 * https://leetcode.com/problems/course-schedule/description/
 * @param {number} numCourses
 *   Total number of courses labeled from 0 to numCourses - 1.
 *
 * @param {Array<[number, number]>} prereq
 *   A list of prerequisite pairs [course, prerequisite].
 *
 * @returns {boolean}
 *   True if all courses can be completed, false if a cycle exists.
 */

function courses(numCourses, prereq) {

  let prereqMap = new Map()

  for ( let c = 0; c < numCourses; c++) {
    prereqMap.set(c, [])
  }

  for( let [c, pre] of prereq) {
    prereqMap.get(c).push(pre)
  }
  let visited = new Set()

  
  const dfs = (course) => {

    if(visited.has(course)) {
      // cycle detection
      return false
    }

    if(prereqMap.get(course).length === 0) {
      return true
    }

    visited.add(course)

    for(let pre of prereqMap.get(course)) {
      if(!dfs(pre)) {
        return false  
      }
    }

    visited.delete(course)
    prereqMap.set(course, [])
    return true
  }

  for ( let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false
    }
  }

  return true

}