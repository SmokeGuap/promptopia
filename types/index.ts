import { NextApiRequest } from 'next';
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
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

export type Post = {
  creator: { username: string; _id: string; image: string; email: string };
  prompt: string;
  tag: string;
  _id: string;
};

export type PromptCardList = {
  data: Post[];
  handleTagClick: (tagName: string) => void;
};

export type Profile = {
  name: string;
  desc: string;
  data: Post[];
  handleEdit: (post: Post) => void;
  handleDelete: (post: Post) => Promise<void>;
};

export type PromptCard = {
  post: Post;
  handleEdit?: (post: Post) => void;
  handleTagClick?: (tagName: string) => void;
  handleDelete?: (post: Post) => Promise<void>;
};

export interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    id: number;
  };
}
