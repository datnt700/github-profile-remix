import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { InputSearch } from '../../app/components/common/InputSearch';
describe('InputSearch Component', () => {
  // 1. Kiểm tra component render đúng
  it('should render input and logo', () => {
    render(<InputSearch handleInput={vi.fn()} />);

    const input = screen.getByPlaceholderText('username');

    expect(input).toBeInTheDocument();

    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/Search.svg');
  });

  it('should call handleInput on input change', () => {
    const mockHandleInput = vi.fn(); // Tạo hàm giả lập
    render(<InputSearch handleInput={mockHandleInput} />);

    const input = screen.getByPlaceholderText('username');
    fireEvent.change(input, { target: { value: 'testuser' } });

    expect(mockHandleInput).toHaveBeenCalledTimes(1);
  });

  it('should have correct placeholder text', () => {
    render(<InputSearch handleInput={vi.fn()} />);

    const input = screen.getByPlaceholderText('username');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'username');
  });
});
