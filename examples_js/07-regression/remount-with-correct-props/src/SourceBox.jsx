import { useDrag } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
const getStyle = (isDragging) => ({
    display: 'inline-block',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    border: '1px dashed gray',
    backgroundColor: isDragging ? 'red' : undefined,
    opacity: isDragging ? 0.4 : 1,
});
export const SourceBox = ({ id, onBeginDrag, onEndDrag, }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOX,
        item: { id },
        isDragging: (monitor) => monitor.getItem().id === id,
        collect: (monitor) => ({ isDragging: monitor.isDragging() }),
        begin: onBeginDrag,
        end: onEndDrag,
    }));
    return (<div ref={drag} style={getStyle(isDragging)}>
			Drag me
		</div>);
};
