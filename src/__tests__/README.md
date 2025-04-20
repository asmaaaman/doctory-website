# Testing Guide for Doctory Website

This directory contains test files for the Doctory Website application. The tests are written using Vitest and React Testing Library.

## Test Structure

- `setup.ts`: Configuration for the testing environment
- `data/`: Tests for data models and mock data
- `components/`: Tests for React components

## Running Tests

You can run the tests using the following commands:

```bash
# Run tests in watch mode
yarn test

# Run tests with coverage report
yarn test:coverage

# Run tests with UI
yarn test:ui
```

## Writing Tests

When writing new tests, follow these guidelines:

1. Place component tests in the `components/` directory
2. Place data model tests in the `data/` directory
3. Use descriptive test names that explain what is being tested
4. Group related tests using `describe` blocks
5. Use `it` or `test` for individual test cases
6. Use the React Testing Library's query methods to find elements
7. Avoid testing implementation details; focus on component behavior

## Test Coverage

The test coverage report can be found in the `coverage/` directory after running `yarn test:coverage`.

## Mocking

For components that depend on external services or complex state, use Vitest's mocking capabilities:

```typescript
import { vi } from "vitest";

// Mock a function
const mockFunction = vi.fn();

// Mock a module
vi.mock("path/to/module", () => ({
  default: vi.fn(),
  someFunction: vi.fn(),
}));
```
