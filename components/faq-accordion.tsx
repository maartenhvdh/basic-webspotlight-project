import { Accordion, Card } from 'react-bootstrap';
import RichText from './richtext';

interface IProps {
    itemId?: string,
    itemName?: string,
    defaultElementCodename?: string,

    question: string,
    answer: any
}

export const FaqAccordion: React.FC<IProps> = ({ question, answer, itemId, itemName, defaultElementCodename }) => {
    return <div className="row" data-kontent-item-id={itemId} data-kontent-element-codename={defaultElementCodename}>
            <div className="col position-relative">
            <Accordion>
                        <Card>
                        <Accordion.Header>{question}</Accordion.Header>
                        <Accordion.Body>
                        <RichText element={answer}/>
                        </Accordion.Body>
                        </Card>
                    </Accordion>
            </div>
        </div>
}