import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'titlecase'
})
export class TitleCasePipe implements PipeTransform {
    private prepositions: string[] = ['the', 'of', 'and', 'a', 'before', 'after', 'other'];

    transform(value: string) {
        if (value === undefined || value === null) {
            return;
        }

        const wordArray = value.toLowerCase().split(' ');

        wordArray.forEach((word, index) => {
            if (this.isAPreposition(word) && !this.isFirstWord(index)) {
                return;
            }

            wordArray[index] = this.makeTitleWord(word);
        });

        return wordArray.join(' ');
    }

    private makeTitleWord(word: string): string {
        return `${word.charAt(0).toUpperCase()}${word.substr(1)}`;
    }

    private isAPreposition(word): boolean {
        return this.prepositions.includes(word);
    }

    private isFirstWord(index: number): boolean {
        return (index === 0);
    }
}
