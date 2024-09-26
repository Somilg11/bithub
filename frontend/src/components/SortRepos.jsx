
import { Zap } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { Utensils } from 'lucide-react';

const SortRepos = ({ onSort, sortType }) => {
	const BUTTONS = [
		{ type: "recent", text: "Most Recent", icon: <Zap /> },
		{ type: "stars", text: "Most Stars", icon: <Sparkles /> },
		{ type: "forks", text: "Most Forks", icon: <Utensils /> },
	];

	return (
		<div className='mb-2 flex justify-center lg:justify-end'>
			{BUTTONS.map((button) => (
				<button
					key={button.type}
					type='button'
					className={`py-2.5 px-5 me-2 mb-2 text-xs sm:text-sm font-medium focus:outline-none rounded-lg bg-glass ${
						button.type == sortType ? "border-blue-500" : ""
					}`}
					onClick={() => onSort(button.type)}
				>
                    <span className='inline-flex gap-2 items-center justify-center'>
					{button.text}
                    <span className='hidden sm:inline'>{button.icon}</span>
                    </span>
				</button>
			))}
		</div>
	);
};
export default SortRepos;