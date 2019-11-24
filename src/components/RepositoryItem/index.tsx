import React from 'react';
import { Container } from './styles';

interface Repository {
  id: number;
  name: string
}

interface Props {
  repository: Repository
}

export default function RepositoryItem({ repository } : Props) {
  return (
    <Container>
      <li key={repository.id}>{ repository.name}</li>
    </Container>
  );
}
