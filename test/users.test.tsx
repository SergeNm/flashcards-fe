import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from './testUtils';
import Users from '../src/components/github-username/Users';


describe('Fetch all users', () => {
    test('Should Render Users Component', async () => {
      render(<Users />);
      expect(screen.getByText(/\b(Search)\b/i)).toBeInTheDocument();
    });
  });