// src/services/authService.js
import { supabase } from '../client';

export async function signUpUser(formData) {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
      options: {
        data: {
          name: formData.name,
        }
      }
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function updatePassword(password) {
  try {
    const { data, error } = await supabase.auth.updateUser({
      password: password,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
}