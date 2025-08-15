import axios from 'axios';
import { get_current_link } from '../api';

// Interface for page data structure
interface PageData {
  id: string;
  title: string;
  content?: string;
  topic_id: string;
  order?: number;
  difficulty?: string;
  estimated_time?: number;
  // Add more fields as needed based on your API response
}

// Interface for the API response
interface PageDataResponse {
  success: boolean;
  data: PageData[];
  message?: string;
}

// Function to fetch all page data for a specific topic
export const fetch_page_data_by_topic_id = async (topic_id: string): Promise<PageData[]> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<PageDataResponse>(`${base_url}/page-data/topic/${topic_id}`);
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch page data for topic');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch page data for topic');
  }
};

