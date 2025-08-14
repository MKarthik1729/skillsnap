export const pages_data = {
    selection_sort: [
        {
            title: "Selection Sort",
            description: "Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first element of the unsorted part.",
            content: [
                "Selection Sort is a simple sorting algorithm that works by repeatedly finding the minimum element from the unsorted part of the array and swapping it with the first element of the unsorted part.",
                "The algorithm divides the array into two parts: sorted and unsorted.",
                "Initially, the sorted part is empty and the unsorted part contains all elements."
            ]
        },
        {
            title: "Steps of Selection Sort",
            description: "The steps of selection sort are as follows:",
            content: [
                "1. Find the minimum element in the unsorted array.",
                "2. Swap the minimum element with the first element of the unsorted part.",
                "3. Move the boundary between sorted and unsorted parts one element to the right.",
                "4. Repeat steps 1-3 until the entire array is sorted."
            ]
        },
        {
            title: "Time Complexity of Selection Sort",
            description: "The time complexity of selection sort is O(n²).",
            content: [
                "Best Case: O(n²) - Even if the array is already sorted, we still need to scan the entire unsorted portion.",
                "Average Case: O(n²) - On average, we need to scan half of the remaining elements each time.",
                "Worst Case: O(n²) - When the array is in reverse order.",
                "Space Complexity: O(1) - Only uses a constant amount of extra space."
            ]
        },
        {
            title: "Example with Every Step",
            description: "Let's trace through selection sort with the array [64, 25, 12, 22, 11]:",
            content: [
                "Initial array: [64, 25, 12, 22, 11]",
                "",
                "Pass 1:",
                "- Find minimum in unsorted part [64, 25, 12, 22, 11] → 11",
                "- Swap 11 with first element 64",
                "- Array becomes: [11, 25, 12, 22, 64]",
                "- Sorted part: [11], Unsorted part: [25, 12, 22, 64]",
                "",
                "Pass 2:",
                "- Find minimum in unsorted part [25, 12, 22, 64] → 12",
                "- Swap 12 with first element 25",
                "- Array becomes: [11, 12, 25, 22, 64]",
                "- Sorted part: [11, 12], Unsorted part: [25, 22, 64]",
                "",
                "Pass 3:",
                "- Find minimum in unsorted part [25, 22, 64] → 22",
                "- Swap 22 with first element 25",
                "- Array becomes: [11, 12, 22, 25, 64]",
                "- Sorted part: [11, 12, 22], Unsorted part: [25, 64]",
                "",
                "Pass 4:",
                "- Find minimum in unsorted part [25, 64] → 25",
                "- Swap 25 with first element 25 (no change)",
                "- Array remains: [11, 12, 22, 25, 64]",
                "- Sorted part: [11, 12, 22, 25], Unsorted part: [64]",
                "",
                "Pass 5:",
                "- Find minimum in unsorted part [64] → 64",
                "- Swap 64 with first element 64 (no change)",
                "- Final sorted array: [11, 12, 22, 25, 64]"
            ]
        }
    ]
};
