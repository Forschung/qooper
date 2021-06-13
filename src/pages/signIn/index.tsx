// React Components
import React, { useState, useEffect } from 'react';

// Firebase
import { useAuth } from 'config/authProvider';
import { firebase } from 'config/initFirebase';
import FirebaseAuth from 'config/firebaseAuth';

// Material UI Components
import { Box, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';

// Components
import Meta from 'components/meta';
import Link from 'components/link';
import Button from 'components/button';
import Todo from 'components/toDo/index';

export interface FHomepageProps {
    text?: string;
    uid: string;
    file: string;
    code: string;
}

export const useStyles = makeStyles((theme: Theme) => ({
    root: ({ }: FHomepageProps) => ({
        display: "block"
    }),
}));

export const database = firebase.database();

export default function SignIn() {

    const { user, loading, logout } = useAuth();

    if (loading) return null;
    if (!user) return <FirebaseAuth />;

    return (
        <Box>
            <Meta title={'Signed In'} />
            <Button background={'#07bcf7'} color={'white'} onClick={logout} className="link">
                Logout
            </Button>
            <ToDoApp uid={user.uid} />
        </Box>
    )
};
  
function ToDoApp({ uid }: { uid: string }) {
    const [ToDoApp, setToDoApp] = useState<Record<string, FHomepageProps>>({});
  
    useEffect(() => {
      const userToDoAppRef = database.ref(`userToDoApp/${uid}`);
      const refs = [userToDoAppRef];
  
      userToDoAppRef.on("child_added", (child) => {
        const key: string = child.key as string;
        const toDoRef = database.ref(`ToDoApp/${key}`);
        refs.push(toDoRef);
        toDoRef.on("value", (snap) => {
          setToDoApp((old) => {
            return { ...old, [key]: snap.val() };
          });
        });
      });
  
      return () => {
        refs.forEach((ref) => ref.off());
      };
    }, []);
  
    return (
        <Todo />
      );
}