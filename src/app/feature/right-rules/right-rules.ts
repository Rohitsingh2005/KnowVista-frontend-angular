import { Component } from '@angular/core';
import { KNOWVISTA_RULES, RightsRule } from './entity/entity';

@Component({
  selector: 'app-right-rules',
  standalone: false,
  templateUrl: './right-rules.html',
  styleUrl: './right-rules.scss',
})
export class RightRules {

  
  rules: RightsRule[] = KNOWVISTA_RULES;

  getByType(type: string) {
    return this.rules.filter(r => r.type === type);
  }
}
