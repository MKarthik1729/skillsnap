import axios from 'axios';
import { get_current_link } from '../api';

// Interface for code data structure
interface CodeData {
  id: string;
  title: string;
  code?: string;
  language?: string;
  topic_id: string;
  difficulty?: string;
  description?: string;
  // Add more fields as needed based on your API response
}

// Interface for the API response
interface CodeDataResponse {
  success: boolean;
  data: CodeData[];
  message?: string;
}

// Function to fetch all code data for a specific topic
export const fetch_code_data_by_topic_id = async (topic_id: string): Promise<CodeData[]> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<CodeDataResponse>(`${base_url}/codes/topic/${topic_id}`);
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch code data for topic');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch code data for topic');
  }
};


// Export the CodeData interface for use in other components
export type { CodeData, CodeDataResponse };
