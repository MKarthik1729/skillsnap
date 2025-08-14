import { use_dictionary_store } from './content';

// Function to fill the store with data structures and algorithms topics
export const fill_dsa_topics = () => {
  const { add_entry } = use_dictionary_store.getState();

  // 1. Basic Data Structures
  add_entry('basic_data_structures', 'Basic Data Structures', 'Fundamental linear and non-linear data structures', [
    'arrays',
    'linked_lists', 
    'stacks',
    'queues',
    'strings',
    'tuples',
    'lists'
  ]);

  // 2. Tree Data Structures
  add_entry('tree_data_structures', 'Tree Data Structures', 'Hierarchical data structures with nodes and edges', [
    'binary_trees',
    'binary_search_trees',
    'avl_trees',
    'red_black_trees',
    'b_trees',
    'splay_trees',
    'segment_trees',
    'fenwick_trees',
    'tries'
  ]);

  // 3. Graph Data Structures
  add_entry('graph_data_structures', 'Graph Data Structures', 'Non-linear data structures with vertices and edges', [
    'directed_graphs',
    'undirected_graphs',
    'weighted_graphs',
    'adjacency_matrix',
    'adjacency_list',
    'incidence_matrix'
  ]);

  // 4. Advanced Data Structures
  add_entry('advanced_data_structures', 'Advanced Data Structures', 'Specialized data structures for specific use cases', [
    'hash_tables',
    'heaps',
    'disjoint_sets',
    'union_find',
    'skip_lists',
    'bloom_filters'
  ]);

  // 5. Sorting Algorithms
  add_entry('sorting_algorithms', 'Sorting Algorithms', 'Algorithms to arrange elements in specific order', [
    'bubble_sort',
    'selection_sort',
    'insertion_sort',
    'merge_sort',
    'quick_sort',
    'heap_sort',
    'counting_sort',
    'radix_sort',
    'bucket_sort'
  ]);

  // 6. Searching Algorithms
  add_entry('searching_algorithms', 'Searching Algorithms', 'Algorithms for finding elements in data structures', [
    'linear_search',
    'binary_search',
    'depth_first_search',
    'breadth_first_search',
    'a_star_search',
    'dijkstra_algorithm',
    'bellman_ford',
    'floyd_warshall'
  ]);

  // 7. Algorithm Design Paradigms
  add_entry('algorithm_design_paradigms', 'Algorithm Design Paradigms', 'Different approaches to solving algorithmic problems', [
    'divide_and_conquer',
    'dynamic_programming',
    'greedy_algorithms',
    'backtracking',
    'recursion',
    'iterative_approaches'
  ]);

  // 8. String Algorithms
  add_entry('string_algorithms', 'String Algorithms', 'Specialized algorithms for string processing', [
    'kmp_algorithm',
    'rabin_karp',
    'boyer_moore',
    'suffix_trees',
    'palindrome_algorithms',
    'string_matching',
    'pattern_searching'
  ]);

  // 9. Advanced Algorithms
  add_entry('advanced_algorithms', 'Advanced Algorithms', 'Complex algorithms for specialized problems', [
    'fast_fourier_transform',
    'karatsuba_algorithm',
    'simplex_algorithm',
    'genetic_algorithms',
    'simulated_annealing',
    'network_flow',
    'ford_fulkerson',
    'edmonds_karp',
    'dinic_algorithm'
  ]);

  // 10. Computational Geometry
  add_entry('computational_geometry', 'Computational Geometry', 'Algorithms for geometric problems', [
    'convex_hull',
    'line_intersection',
    'point_in_polygon',
    'voronoi_diagrams',
    'closest_pair',
    'geometric_algorithms'
  ]);
};

// Function to clear and refill the store
export const refresh_dsa_topics = () => {
  const { clear_dictionary } = use_dictionary_store.getState();
  clear_dictionary();
  fill_dsa_topics();
};

// Function to get topic count
export const get_topic_count = () => {
  const { get_all_entries } = use_dictionary_store.getState();
  return get_all_entries().length;
};
