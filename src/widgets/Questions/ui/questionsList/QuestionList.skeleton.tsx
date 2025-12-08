import styles from './QuestionsList.module.css'
import SkeletonLoaderCard from "@/shared/ui/components/SkeletonLoaderCard/SkeletonLoaderCard";

export const QuestionsListSkeleton = () => { 

    return (
        <div className={styles.listWrapper}>
            {new Array(10).fill(null).map((_, id) => (
                <SkeletonLoaderCard key={id}/>
            ))}
        </div>
    )
} 