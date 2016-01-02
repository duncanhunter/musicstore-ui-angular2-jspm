import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Album} from '../../models';
import template from './album-summary.html!text';
import css from './album-summary.css!css';
@Component({
    selector: 'album-summary',
    template: template,
    style: [css],
    directives: [CORE_DIRECTIVES]
})

export class AlbumSummary  {
    @Input() album: Album;
}
