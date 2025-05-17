import {useEffect, useState} from 'react';

const SkillBar = ({level}) => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setWidth(level);
        }, 100);

        return () => clearTimeout(timer);
    }, [level]);

    const getLevelLabel = (level) => {
        if (level < 30) return 'Beginner';
        if (level < 60) return 'Intermediate';
        if (level < 85) return 'Advanced';
        return 'Expert';
    };

    const getLevelColor = (level) => {
        if (level < 30) return 'bg-blue-400';
        if (level < 60) return 'bg-blue-500';
        if (level < 85) return 'bg-blue-600';
        return 'bg-blue-700';
    };

    return (
        <div className="w-full">
            <div className="flex justify-between mb-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">{getLevelLabel(level)}</span>
                <span className="text-sm text-gray-700 dark:text-gray-300">{level}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div
                    className={`h-2.5 rounded-full transition-all duration-1000 ease-out ${getLevelColor(level)}`}
                    style={{width: `${width}%`}}
                ></div>
            </div>
        </div>
    );
};

export default SkillBar;