import { use_string_array_store } from './content';

// Dictionary containing all DSA topics data
const dsa_topics_dictionary = {
  basic_data_structures: {
    title: 'Basic Data Structures',
    description: 'Fundamental linear and non-linear data structures',
    topics: [
      'arrays',
      'linked_lists', 
      'stacks',
      'queues',
      'strings',
      'tuples',
      'lists'
    ]
  },
  tree_data_structures: {
    title: 'Tree Data Structures',
    description: 'Hierarchical data structures with nodes and edges',
    topics: [
      'binary_trees',
      'binary_search_trees',
      'avl_trees',
      'red_black_trees',
      'b_trees',
      'splay_trees',
      'segment_trees',
      'fenwick_trees',
      'tries'
    ]
  },
  graph_data_structures: {
    title: 'Graph Data Structures',
    description: 'Non-linear data structures with vertices and edges',
    topics: [
      'directed_graphs',
      'undirected_graphs',
      'weighted_graphs',
      'adjacency_matrix',
      'adjacency_list',
      'incidence_matrix'
    ]
  },
  advanced_data_structures: {
    title: 'Advanced Data Structures',
    description: 'Specialized data structures for specific use cases',
    topics: [
      'hash_tables',
      'heaps',
      'disjoint_sets',
      'union_find',
      'skip_lists',
      'bloom_filters'
    ]
  },
  sorting_algorithms: {
    title: 'Sorting Algorithms',
    description: 'Algorithms to arrange elements in specific order',
    topics: [
      'bubble_sort',
      'selection_sort',
      'insertion_sort',
      'merge_sort',
      'quick_sort',
      'heap_sort',
      'counting_sort',
      'radix_sort',
      'bucket_sort'
    ]
  },
  searching_algorithms: {
    title: 'Searching Algorithms',
    description: 'Algorithms for finding elements in data structures',
    topics: [
      'linear_search',
      'binary_search',
      'depth_first_search',
      'breadth_first_search',
      'a_star_search',
      'dijkstra_algorithm',
      'bellman_ford',
      'floyd_warshall'
    ]
  },
  algorithm_design_paradigms: {
    title: 'Algorithm Design Paradigms',
    description: 'Different approaches to solving algorithmic problems',
    topics: [
      'divide_and_conquer',
      'dynamic_programming',
      'greedy_algorithms',
      'backtracking',
      'recursion',
      'iterative_approaches'
    ]
  },
  string_algorithms: {
    title: 'String Algorithms',
    description: 'Specialized algorithms for string processing',
    topics: [
      'kmp_algorithm',
      'rabin_karp',
      'boyer_moore',
      'suffix_trees',
      'palindrome_algorithms',
      'string_matching',
      'pattern_searching'
    ]
  },
  advanced_algorithms: {
    title: 'Advanced Algorithms',
    description: 'Complex algorithms for specialized problems',
    topics: [
      'fast_fourier_transform',
      'karatsuba_algorithm',
      'simplex_algorithm',
      'genetic_algorithms',
      'simulated_annealing',
      'network_flow',
      'ford_fulkerson',
      'edmonds_karp',
      'dinic_algorithm'
    ]
  },
  computational_geometry: {
    title: 'Computational Geometry',
    description: 'Algorithms for geometric problems',
    topics: [
      'convex_hull',
      'line_intersection',
      'point_in_polygon',
      'voronoi_diagrams',
      'closest_pair',
      'geometric_algorithms'
    ]
  }
};

// Function to fill the store with data structures and algorithms topics
export const fill_dsa_topics = () => {
  const { add_string,clear_strings } = use_string_array_store.getState();

  clear_strings();
  // Iterate through the dictionary and add the keys (topic names) to the string array
  Object.values(dsa_topics_dictionary).forEach((value) => {
    add_string(value.title);
  });
};

// Function to clear and refill the store
export const refresh_dsa_topics = () => {
  const { clear_strings } = use_string_array_store.getState();
  clear_strings();
  fill_dsa_topics();
};

// Function to get topic count
export const get_topic_count = () => {
  const { get_all_strings } = use_string_array_store.getState();
  return get_all_strings().length;
};

// Function to fill topics by title
export const fill_topics_by_title = (title: string) => {
  const { add_string, clear_strings } = use_string_array_store.getState();
  
  clear_strings();
  
  // Find the category that matches the title
  const category_key = Object.keys(dsa_topics_dictionary).find(key => 
    dsa_topics_dictionary[key as keyof typeof dsa_topics_dictionary].title.toLowerCase() === title.toLowerCase()
  );
  
  if (category_key) {
    const topics = dsa_topics_dictionary[category_key as keyof typeof dsa_topics_dictionary].topics;
    topics.forEach(topic => {
      add_string(topic);
    });
  }
};
