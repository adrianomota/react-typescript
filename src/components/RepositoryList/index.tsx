import React from 'react';
import { Container } from './styles';
import RepositoryItem from '../RepositoryItem';

interface Repository {
  id: number;
  name: string
}

interface Props {
  repositories: Repository[]
}

export default function RepositoryList({ repositories } : Props) {
  return (
    <Container>
      <ul>
        {
       repositories.map((repo) => (
         <RepositoryItem key={repo.id} repository={repo} />
       ))
     }
      </ul>
    </Container>
  );
}
