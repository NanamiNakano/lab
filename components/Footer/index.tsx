import {createStyles, Container, Group, ActionIcon, rem} from '@mantine/core';
import {IconBrandBilibili, IconBrandGithub} from '@tabler/icons-react';
import styles from "/styles/Home.module.css";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },
}));

export function Footer() {
    const {classes} = useStyles();

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Image
                    src="/ava.jpg"
                    alt="Avatar"
                    className={styles.ava}
                    width={100}
                    height={24}
                    priority
                />
                <p>
                    Developed by <a href="https://notkiller.moe">Nanami</a>.
                </p>
                <Group spacing={0} className={classes.links} position="right" noWrap>
                    <ActionIcon size="lg" component="a" href="https://space.bilibili.com/497507407">
                        <IconBrandBilibili size="1.05rem" stroke={1.5}/>
                    </ActionIcon>
                    <ActionIcon size="lg" component="a" href="https://github.com/NanamiNakano">
                        <IconBrandGithub size="1.05rem" stroke={1.5}/>
                    </ActionIcon>
                </Group>
            </Container>
        </div>
    );
}