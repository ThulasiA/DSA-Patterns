
/**
 * Analyzes employee entry and exit logs and identifies:
 * 1. Employees who entered but never exited.
 * 2. Employees who exited without having entered.
 *
 * Each log entry is a tuple: [employeeName, action]
 * where `action` is either "enter" or "exit".
 *
 * Rules:
 * - An employee must "enter" before they "exit".
 * - Logs may appear in any order.
 * - If an employee exits without a prior enter → add to `exitNoEnter`.
 * - If an employee enters but never exits → remains in `enterNoExit`.
 *
 * Approach:
 * - Maintain a set of employees currently inside (`enterNoExit`).
 * - Maintain a set of invalid exits (`exitNoEnter`).
 * - For each log:
 *   - If "enter": add to `enterNoExit`.
 *   - If "exit":
 *       - If they were inside, remove them.
 *       - Otherwise, record invalid exit.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {Array<[string, "enter" | "exit"]>} logs
 *   A list of employee log entries.
 *
 * @returns {{ enterNoExit: string[], exitNoEnter: string[] }}
 *   An object containing:
 *   - `enterNoExit`: employees who entered but did not exit.
 *   - `exitNoEnter`: employees who exited without entering.
 */

function employeeLogs(logs) {
  let enterNoExit = new Set()
  let exitNoEnter = new Set()

  for(let [name, action] of logs) {
    if(action === "enter") {
      enterNoExit.add(name)      
    } else {
      if(enterNoExit.has(name)) {
        enterNoExit.delete(name)
      } else {
        exitNoEnter.add(name)
      }
    }
  }

  return {
    enterNoExit:[...enterNoExit],
    exitNoEnter: [...exitNoEnter]
  }
}

let logs = [
  ["Alice", "enter"],
  ["Bob", "exit"],
  ["Alice", "exit"],
  ["Charlie", "exit"],
  ["David", "enter"]
];
console.log(employeeLogs(logs))