const API_URL = "http://localhost:5000/api";

export interface RegistrationData {
  name: string;
  email: string;
  courseId: string;
  phone?: string;
  message?: string;
}

export interface ApiResponse {
  message?: string;
  error?: string;
  participant?: any;
}

export const registerParticipant = async (
  data: RegistrationData
): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      throw new Error(result.error || "Registration failed");
    }

    return result;
  } catch (error) {
    throw error;
  }
};

export const getParticipants = async (courseId?: string): Promise<any[]> => {
  try {
    const url = courseId
      ? `${API_URL}/participants?courseId=${courseId}`
      : `${API_URL}/participants`;

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to fetch participants");
    }

    return data;
  } catch (error) {
    throw error;
  }
};
