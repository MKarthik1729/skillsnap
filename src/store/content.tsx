import { create } from 'zustand';

// Define the type for dictionary entries
interface DictionaryEntry {
  key: string;
  value: string;
  description?: string;
  subtopics?: string[];
  created_at: Date;
  updated_at: Date;
}

// Define the store state interface
interface DictionaryStore {
  // State
  dictionary: Record<string, DictionaryEntry>;
  
  // Actions
  add_entry: (key: string, value: string, description?: string, subtopics?: string[]) => void;
  remove_entry: (key: string) => void;
  update_entry: (key: string, value: string, description?: string, subtopics?: string[]) => void;
  get_entry: (key: string) => DictionaryEntry | undefined;
  clear_dictionary: () => void;
  get_all_entries: () => DictionaryEntry[];
  has_key: (key: string) => boolean;
}

// Create the Zustand store
export const use_dictionary_store = create<DictionaryStore>((set, get) => ({
  // Initial state
  dictionary: {},

  // Add a new entry to the dictionary
  add_entry: (key: string, value: string, description?: string, subtopics?: string[]) => {
    const now = new Date();
    set((state) => ({
      dictionary: {
        ...state.dictionary,
        [key]: {
          key,
          value,
          description,
          subtopics,
          created_at: now,
          updated_at: now,
        },
      },
    }));
  },

  // Remove an entry from the dictionary
  remove_entry: (key: string) => {
    set((state) => {
      const new_dictionary = { ...state.dictionary };
      delete new_dictionary[key];
      return { dictionary: new_dictionary };
    });
  },

  // Update an existing entry
  update_entry: (key: string, value: string, description?: string, subtopics?: string[]) => {
    set((state) => {
      if (state.dictionary[key]) {
        return {
          dictionary: {
            ...state.dictionary,
            [key]: {
              ...state.dictionary[key],
              value,
              description,
              subtopics,
              updated_at: new Date(),
            },
          },
        };
      }
      return state;
    });
  },

  // Get a specific entry by key
  get_entry: (key: string) => {
    return get().dictionary[key];
  },

  // Clear all entries from the dictionary
  clear_dictionary: () => {
    set({ dictionary: {} });
  },

  // Get all entries as an array
  get_all_entries: () => {
    return Object.values(get().dictionary);
  },

  // Check if a key exists in the dictionary
  has_key: (key: string) => {
    return key in get().dictionary;
  },
}));
