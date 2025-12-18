import { DislikeIcon, LikeIcon } from "@/shared/ui/icons";
import styles from "./LearnedButtons.module.css"
import { useLocalStorage } from "@/shared/hooks";
import { STORAGE_KEYS } from "@/shared/constants";
import { ButtonsState, IsAnsweredStatus } from "../../model/constants";
import type { IsAnsweredStatusType, LearnedButtonState } from "@/shared/config/model/types";
import { useEffect } from "react";

export const LearnedButtons = ({ id } : { id: number }) => {
    const { setStorageValue: setPassedQuestions, storageValue: passedQuestions } = useLocalStorage<IsAnsweredStatusType>(`${STORAGE_KEYS.PASSED_QUESTIONS}_${id}`)
    const { setStorageValue: setStatus, storageValue: status } = useLocalStorage<LearnedButtonState>(`${STORAGE_KEYS.IS_LEARNED_KEY}_${id}`)
    const { storageValue: answeredQuestions, setStorageValue: setAnsweredQuestions } = useLocalStorage(STORAGE_KEYS.ANSWERED_QUESTIONS_KEY, 0)
    

    useEffect(() => {
        if (!passedQuestions) {
            setPassedQuestions('none')
        }
    }, [])

    const handleIsLearned = () => {
        if (status?.isAnsweredStatus !== IsAnsweredStatus.LEARNED) {
            setStatus({ isAnsweredStatus: IsAnsweredStatus.LEARNED, buttonsState: ButtonsState.ACTIVE })
            setPassedQuestions('learned')
        }
        if ((status?.buttonsState !== ButtonsState.ACTIVE) &&  (status?.isAnsweredStatus !== IsAnsweredStatus.LEARNED)) {
            setAnsweredQuestions((answeredQuestions ?? 0) + 1)
        }
    }

    const handleIsNotLearned = () => {
        if (status?.isAnsweredStatus !== IsAnsweredStatus.NOT_LEARNED) {
            setStatus({ isAnsweredStatus: IsAnsweredStatus.NOT_LEARNED, buttonsState: ButtonsState.ACTIVE })
            setPassedQuestions('not_learned')
        }
        if ((status?.buttonsState !== ButtonsState.ACTIVE) &&  (status?.isAnsweredStatus !== IsAnsweredStatus.NOT_LEARNED)) {
            setAnsweredQuestions((answeredQuestions ?? 0) + 1)
        }
    }

    return (
        <div className={styles.buttonsContainer}>
            <button style={status?.isAnsweredStatus === IsAnsweredStatus.NOT_LEARNED ? { backgroundColor: 'var(--main-yeahub)', color: 'var(--background-color-secondary)' } : {}} onClick={() => handleIsNotLearned()} className={styles.learnedButton}>
                <DislikeIcon fill={status?.isAnsweredStatus === IsAnsweredStatus.NOT_LEARNED ? 'var(--text-color-in-main)' : undefined} />
                <span>Не знаю</span>
            </button>
            <button style={status?.isAnsweredStatus === IsAnsweredStatus.LEARNED ? { backgroundColor: 'var(--main-yeahub)', color: 'var(--background-color-secondary)' } : {}} onClick={() => handleIsLearned()} className={styles.learnedButton}>
                <LikeIcon fill={status?.isAnsweredStatus === IsAnsweredStatus.LEARNED ? 'var(--text-color-in-main)' : undefined} />
                <span>Знаю</span>
            </button>
        </div>
    );
};