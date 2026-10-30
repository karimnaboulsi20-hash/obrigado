/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import { formatOrderDate, validateEmail, maskEmail, getDefaultOrder } from './order';

test('formatOrderDate returns non-empty formatted date in Spanish', () => {
  const d = new Date(2026, 9, 30);
  const formatted = formatOrderDate(d);
  assert.ok(formatted.includes('2026'));
  assert.ok(formatted.includes('octubre') || formatted.includes('30'));
});

test('validateEmail validates typical and invalid emails properly', () => {
  assert.equal(validateEmail('test@example.com'), true);
  assert.equal(validateEmail('usuario.nombre@dominio.org'), true);
  assert.equal(validateEmail('correo_invalido'), false);
  assert.equal(validateEmail('sin_arroba.com'), false);
  assert.equal(validateEmail(''), false);
});

test('maskEmail obfuscates email addresses for security and privacy', () => {
  const masked = maskEmail('karim@example.com');
  assert.equal(masked, 'ka***m@example.com');
  assert.equal(maskEmail('invalid'), 'invalid');
});

test('getDefaultOrder returns valid default thank-you metadata', () => {
  const order = getDefaultOrder();
  assert.equal(order.status, 'Completado');
  assert.equal(order.productName, 'De Cero a la Viralización');
  assert.ok(order.modulesIncluded.length >= 3);
});
