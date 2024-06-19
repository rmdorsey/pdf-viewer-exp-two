import { Component } from '@angular/core';
import { NgxExtendedPdfViewerService } from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private pdfService: NgxExtendedPdfViewerService) {}

  onPdfLoaded(): void {
    //29729288
    const searchStrings = [
      'When preparing new or replacement drawings, be careful to avoid introducing new matter.',
      'They raise the issue of new matter (see NOTE below);',
      "The Examiners reminded applicant's counsel that the removal of lines, broken or solid, would be considered new matter, but the Examiner's did agree that objected to contour lines could be removed and the revision would not be considered new matter.",
      'such contour lines does not constitute new matter.',
      'The substitute specification includes no new matter.',
    ];

    this.pdfService.findMultiple(searchStrings, {
      matchCase: false,
      wholeWords: false,
      ignoreAccents: true,
      highlightAll: true,
      findMultipleSearchTexts: true,
      fuzzySearch: false,
    });
  }

  onUpdateFindControlState(event: any): void {
    console.log('Search successful:', event);
  }
}
