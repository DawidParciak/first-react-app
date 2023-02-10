import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = (props) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();
  const listId = props.columnId;

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addList({ title, description, listId }));
    setTitle('');
    setDescription('');
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <label>Title:</label> <TextInput type="text" value={title} onChange={e => setTitle(e.target.value)} />
      <label>Description:</label> <TextInput type="text" value={description} onChange={e => setDescription(e.target.value)} />
      <Button>Add list</Button>
    </form>
	);
};

export default ListForm;
