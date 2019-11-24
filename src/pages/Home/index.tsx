import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRequest } from '../../store/ducks/repositories/actions';
import { ApplicationState } from '../../store';
import { Container } from './styles';
import RepositoryList from '../../components/RepositoryList';

export default function Home() {
  const dispatch = useDispatch();
  const { data: repositories } = useSelector((state : ApplicationState) => state.repositories);

  useEffect(() => {
    const loadRepos = async () => {
      dispatch(loadRequest());
    };

    loadRepos();
  }, [dispatch]);

  return (
    <Container>
      <h1>GITHUB REPOSITORIES</h1>
      <RepositoryList repositories={repositories} />
    </Container>
  );
}
