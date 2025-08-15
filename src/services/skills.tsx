import axios from 'axios';
import { get_current_link } from '../api';

// Interface for skill data structure
interface Skill {
  id: string;
  name: string;
  description?: string;
  category?: string;
  level?: string;
  // Add more fields as needed based on your API response
}

// Interface for the API response
interface SkillsResponse {
  success: boolean;
  data: Skill[];
  message?: string;
}

// Function to fetch all skills
export const fetch_skills = async (): Promise<Skill[]> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<SkillsResponse>(`${base_url}/skills`);
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch skills');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch skills');
  }
};

// Function to fetch a single skill by ID
export const fetch_skill_by_id = async (skill_id: string): Promise<Skill> => {
  try {
    const base_url = get_current_link();
    const response = await axios.get<{ success: boolean; data: Skill; message?: string }>(
      `${base_url}/skills/${skill_id}`
    );
    
    if (response.data.success) {
      return response.data.data;
    } else {
      throw new Error(response.data.message || 'Failed to fetch skill');
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(`API Error: ${error.response?.data?.message || error.message}`);
    }
    throw new Error('Failed to fetch skill');
  }
};

// Export the Skill interface for use in other components
export type { Skill, SkillsResponse };
