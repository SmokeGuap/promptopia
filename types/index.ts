import { Dispatch, SetStateAction } from 'react';

export type Form = {
  type: string;
  post: { prompt: string; tag: string };
  setPost: Dispatch<
    SetStateAction<{
      prompt: string;
      tag: string;
    }>
  >;
  submitting: boolean;
  handleSubmit: (e: any) => Promise<void>;
};

export type PromptCardList = {
  data: string[];
  handleTagClick: (tagName: any) => void;
};
