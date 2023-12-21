import React, { useEffect, useState } from 'react';
import { Loader } from '../Loader';
import { getUser } from '../../api';
import { User } from '../../types/User';
import { Todo } from '../../types/Todo';

type Props = {
  selectedTodoData: {
    userId: number | null;
    todo: Todo | null;
  }
  setSelectedTodoData: (data:
  { userId: number | null; todo: Todo | null }) => void;
};

export const TodoModal: React.FC<Props> = ({
  selectedTodoData,
  setSelectedTodoData,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const { userId, todo } = selectedTodoData;

  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      if (userId !== null) {
        const pickedUser = await getUser(userId);

        setUser(pickedUser);
      }
    };

    loadUser().finally(() => setIsLoading(false));
  }, [userId]);

  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" />

      {isLoading ? (
        <Loader />
      ) : (
        <div className="modal-card">
          <header className="modal-card-head">
            <div
              className="modal-card-title has-text-weight-medium"
              data-cy="modal-header"
            >
              {`Todo #${todo?.id}`}
            </div>

            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              type="button"
              className="delete"
              data-cy="modal-close"
              onClick={() => setSelectedTodoData({ userId: null, todo: null })}
            />
          </header>

          <div className="modal-card-body">
            <p className="block" data-cy="modal-title">
              {todo?.title}
            </p>

            <p className="block" data-cy="modal-user">
              {todo?.completed
                ? <strong className="has-text-success">Done</strong>
                : <strong className="has-text-danger">Planned</strong>}

              {' by '}

              <a href="mailto:Sincere@april.biz">
                {user?.name}
              </a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
