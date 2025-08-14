import { create } from 'zustand';

// Define the store state interface
interface StringArrayStore {
  // State
  strings: string[];
  
  // Actions
  add_string: (str: string) => void;
  remove_string: (index: number) => void;
  update_string: (index: number, str: string) => void;
  get_string: (index: number) => string | undefined;
  clear_strings: () => void;
  get_all_strings: () => string[];
  has_string: (str: string) => boolean;
}

// Create the Zustand store
export const use_string_array_store = create<StringArrayStore>((set, get) => ({
  // Initial state
  strings: [],

  // Add a new string to the array
  add_string: (str: string) => {
    set((state) => ({
      strings: [...state.strings, str],
    }));
  },

  // Remove a string from the array by index
  remove_string: (index: number) => {
    set((state) => ({
      strings: state.strings.filter((_, i) => i !== index),
    }));
  },

  // Update a string at a specific index
  update_string: (index: number, str: string) => {
    set((state) => {
      if (index >= 0 && index < state.strings.length) {
        const new_strings = [...state.strings];
        new_strings[index] = str;
        return { strings: new_strings };
      }
      return state;
    });
  },

  // Get a specific string by index
  get_string: (index: number) => {
    const strings = get().strings;
    return index >= 0 && index < strings.length ? strings[index] : undefined;
  },

  // Clear all strings from the array
  clear_strings: () => {
    set({ strings: [] });
  },

  // Get all strings as an array
  get_all_strings: () => {
    return get().strings;
  },

  // Check if a string exists in the array
  has_string: (str: string) => {
    return get().strings.includes(str);
  },
}));
