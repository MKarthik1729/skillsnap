// Environment link storage configuration
interface EnvironmentLinks {
  dev: string;
  staging: string;
  prod: string;
}

// Environment configuration with links
const environment_links: EnvironmentLinks = {
  dev: 'http://localhost:5000/api/v1',
  staging: 'https://skillsnap-server.onrender.com/api/v1',
  prod: 'https://skillsnap-server.onrender.com/api/v1'
};

// Current active environment (can be changed based on build process or environment variables)
const current_environment: keyof EnvironmentLinks = 'dev';

// Get the current active link
export const get_current_link = (): string => {
  return environment_links[current_environment];
};

// Export the current active link as default
export default get_current_link();
