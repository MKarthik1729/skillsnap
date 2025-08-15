import axios from 'axios';
import { get_current_link } from '../api';

// Interface for topic data structure
interface Topic {
  id: string;
  name: string;
  description?: string;
  category?: string;
  difficulty?: string;
  // Add more fields as needed based on your API response
}

// Interface for the API response
interface TopicsResponse {
  success: boolean;
  data: Topic[];
  message?: string;
}

// Function to fetch all topics
export const fetch_topics = async (): Promise<Topic[]> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<TopicsResponse>(`${base_url}/topics`);
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch topics');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch topics');
  }
};

// Function to fetch a single topic by ID
export const fetch_topic_by_id = async (topic_id: string): Promise<Topic> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<{ success: boolean; data: Topic; message?: string }>(
      `${base_url}/topics/${topic_id}`
    );
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch topic');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch topic');
  }
};

// Function to fetch topics by skill ID (get /skill/:skill_id)
export const fetch_topics_by_skill_id = async (skill_id: string): Promise<Topic[]> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<TopicsResponse>(`${base_url}/topics/skill/${skill_id}`);
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch topics for skill');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch topics for skill');
  }
};

// Export the Topic interface for use in other components
export type { Topic, TopicsResponse };
